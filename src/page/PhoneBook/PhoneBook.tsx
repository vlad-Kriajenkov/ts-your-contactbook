import React, { FC } from 'react';
import { BoxFlex } from './PhoneBook.styled';
import { AddContact, ContactList } from './index';

const PhoneBook: FC = () => {
  return (
    <BoxFlex>
      <AddContact />
      <ContactList />
    </BoxFlex>
  );
};

export default PhoneBook;
