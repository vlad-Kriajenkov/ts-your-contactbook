import React, { ChangeEvent, FC, useState } from 'react';
import {
  Container,
  Title,
  Input,
  ItemContatct,
  Wrapper,
  NameContatct,
  NumberContatct,
} from './ContactList.styled';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { deleteContact } from '../../../redux/contacts/contact-operation';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { IContact } from '../../../interface/IContact/interface';

import { ModalContact } from '../Modal/index';

interface IOldContact {
  id: string;
  name: string;
  number: string;
}

const ContactList: FC = () => {
  const [filterName, setFilterName] = useState('');
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts.contacts);

  //! Modal
  const [open, setOpen] = useState(false);
  const [oldContact, setOldContact] = useState<IOldContact>({
    id: '',
    name: '',
    number: '',
  });
  
  const handleOpen = (oldContact: IOldContact) => {
    setOldContact(oldContact);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //! Event
  const onDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
  };
  const hadelFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterName(value);
  };

  //! Logic of the list display
  const visibelContact = contacts.filter((contact: IContact) => {
    return contact.name.toLowerCase().includes(filterName);
  });

  return (
    <Container>
      <Title>Contact</Title>
      <Input
        fullWidth
        id="standard-basic"
        label="Find contacts by name"
        variant="outlined"
        value={filterName}
        name="filter"
        type="text"
        onChange={hadelFilter}
      />

      {contacts.length === 0
        ? `You don't have any contact 😓`
        : visibelContact.map(({ id, name, number }: IContact) => {
            return (
              <ItemContatct key={id}>
                <Wrapper>
                  <NameContatct>{name}:</NameContatct>
                  <NumberContatct>{number}</NumberContatct>
                </Wrapper>
                <div>
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleOpen({ id, name, number })}
                  >
                    <EditIcon sx={{ width: 24, height: 24 }} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => onDeleteContact(id)}
                  >
                    <DeleteIcon sx={{ width: 24, height: 24 }} />
                  </IconButton>
                </div>
              </ItemContatct>
            );
          })}
      <ModalContact
        handleClose={handleClose}
        open={open}
        oldContact={oldContact}
      />
    </Container>
  );
};

export { ContactList };
