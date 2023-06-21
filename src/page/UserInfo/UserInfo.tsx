import React from 'react';
import { FlexBox } from './UserInfo.styled';
import { StatContact, TransactionHistory, UploadStats } from './index';

const UserInfo = () => {
  return (
    <>
      <FlexBox>
        <StatContact />
        <UploadStats />
      </FlexBox>

      <TransactionHistory />
    </>
  );
};
export default UserInfo;
