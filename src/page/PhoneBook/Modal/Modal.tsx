import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { InputBox, style, Title } from './Modal.styled';
import { useAppDispatch } from '../../../redux/hook';
import { patchContact } from '../../../redux/contacts/contact-operation';

interface IMpdalProps {
  handleClose: () => void;
  open: boolean;
  oldContact: {
    id: string;
    name: string;
    number: string;
  };
}

const ModalContact: FC<IMpdalProps> = ({ handleClose, open, oldContact }) => {
  const dispatch = useAppDispatch();
  const [name, setNewName] = useState('');
  const [number, setNewNumber] = useState('');


  const { id, name: oldName, number: oldNumber } = oldContact;

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'newName':
        return setNewName(value);
      case 'newNumber':
        return setNewNumber(value);
      default:
        return;
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact = { id, name, number };

    dispatch(patchContact(newContact));
    setNewName('');
    setNewNumber('');
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Title>Edit Contact</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={12}>
              <TextField
                id="name"
                type="text"
                fullWidth
                label={oldName}
                variant="filled"
                required
                onChange={handlerChange}
                value={name}
                name="newName"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="number"
                type="phone"
                fullWidth
                label={oldNumber}
                variant="filled"
                required
                onChange={handlerChange}
                value={number}
                name="newNumber"
              />
            </Grid>
          </InputBox>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export { ModalContact };
 