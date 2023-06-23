import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';



export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0px;
  padding: 22px 20px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;
export const BoxCont = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 137%;
`;

export const AvatarMui = styled(Avatar)`
  margin-right: 10px;
`;
export const WrapperDate = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
`;
