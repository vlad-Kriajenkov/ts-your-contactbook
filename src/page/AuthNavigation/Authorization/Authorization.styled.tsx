import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1` 
  font-weight: 600;
  font-size: 17px;
  line-height: 120%;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContainerForm = styled(Container)`
  height: fit-content;

  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;

  padding: 40px;
`;

export const InputBox = styled(Grid)`
  margin-bottom: 20px;
`;
