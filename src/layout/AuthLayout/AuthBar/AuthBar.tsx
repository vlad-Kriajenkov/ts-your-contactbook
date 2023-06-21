import React, { FC } from 'react';

import { Nav, Link } from './AuthBar.styled';
const AuthBar: FC = () => {
  return (
    <Nav>
      <Link to="authorization">Authorization</Link>
      <Link to="registration">Registration</Link>
    </Nav>
  );
};
export { AuthBar };
