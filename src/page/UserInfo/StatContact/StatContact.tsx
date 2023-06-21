import React, { FC } from 'react';
import {
  Container,
  WrapperUser,
  AvatarMui,
  FlexBox,
  Name,
  Email,
  ListStat,
  ItemStat,
  ItemStatName,
  ItemStatInfo,
} from './StatContact.styled';
import { useAppSelector } from '../../../redux/hook';
interface IUser {
  name: string;
  email: string;
}

const StatContact: FC = () => {
  const { name, email }: IUser = useAppSelector(state => state.auth.user);

  return (
    <Container>
      <WrapperUser>
        <AvatarMui sx={{ width: 70, height: 70 }} />
        <FlexBox>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </FlexBox>
      </WrapperUser>

      <ListStat>
        <ItemStat>
          <ItemStatName>Followers</ItemStatName>
          <ItemStatInfo>3,232</ItemStatInfo>
        </ItemStat>
        <ItemStat>
          <ItemStatName>Contacts</ItemStatName>
          <ItemStatInfo>10</ItemStatInfo>
        </ItemStat>
        <ItemStat>
          <ItemStatName>Likes</ItemStatName>
          <ItemStatInfo>+3,232</ItemStatInfo>
        </ItemStat>
      </ListStat>
    </Container>
  );
};
export { StatContact };
