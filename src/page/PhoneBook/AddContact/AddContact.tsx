import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../redux/hook';
import {
  ContainerPhoneBook,
  Form,
  TitlePhoneBook,
  Input,
  ButtonAdd,
} from './AddContact.styled';
import { addContact } from '../../../redux/contacts/contact-operation';

import { IAddContact } from '../../../interface/IContact/interface';

const AddContact: FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useAppDispatch();

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newContatct: IAddContact = {
      name,
      number,
    };
    dispatch(addContact(newContatct));
  };
  return (
    <ContainerPhoneBook>
      <Form onSubmit={onSubmit}>
        <TitlePhoneBook>PhooneBook</TitlePhoneBook>

        <Input
          id="standard-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={handelChange}
          type="text"
        />
        <Input
          id="standard-basic"
          label="Number"
          variant="outlined"
          name="number"
          value={number}
          onChange={handelChange}
          type="number"
        />

        <ButtonAdd type="submit" variant="contained">
          Add Contact
        </ButtonAdd>
      </Form>
    </ContainerPhoneBook>
  );
};

export { AddContact };
