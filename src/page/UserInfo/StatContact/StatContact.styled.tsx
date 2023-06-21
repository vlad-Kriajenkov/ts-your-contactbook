import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

export const Container = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: rgba(126, 147, 255, 0.2) 0px 1px 4px;
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;

  padding: 13px 16px;
  text-align: left;
`;

export const AvatarMui = styled(Avatar)`
  margin-right: 14px;
`;
export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.b`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.01em;
`;

export const Email = styled.b`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #7f8e9d;
`;

export const ListStat = styled.ul`
  display: flex;
`;

export const ItemStat = styled.li`
  display: inline-block;
  width: 130px;
  text-align: left;
  padding: 19px 16px;

  :first-of-type {
    background: #e8fbff;
    border-bottom: 5px solid #85c3ff;
  }
  :nth-of-type(2) {
    background: #fff5ec;
    border-bottom: 5px solid #f2994a;
  }
  :nth-of-type(3) {
    background: #ffe8e8;
    border-bottom: 5px solid #ec3a3a;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ItemStatName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #7f8e9d;
  ::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: black;
    margin: 0px 5px 1px 0px;
  }
`;

export const ItemStatInfo = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 137%;

  color: #313541;
`;
