
import styled from '@emotion/styled';
import bgImage from '../../../images/Background.png';
import bgBtn from '../../../images/BgActiveBtnHomeBar.png';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
 
export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
 
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: flex-end;

  font-weight: 600;
  font-size: 17px;
  line-height: 120%;
  padding: 20px 70px;
  color: #ffffff;
  p {
    margin-left: 10px;
  }
  &.active {
    background-image: url(${bgBtn});
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
  }
`;

export const LogOutBtn = styled(Button)`
    position: absolute;
    bottom: 0;
    left: 0;
  transform: translate(35%, -100% );
  margin-top: auto;

  color: white;
  border-color: white;
`;
