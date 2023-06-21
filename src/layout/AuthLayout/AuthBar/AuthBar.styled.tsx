import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import bgImage from '../../../images/Background.png';
import bgBtn from '../../../images/BgActiveBtnAuthBar.png';
import { NavLink } from 'react-router-dom';

const pan = keyframes`
	100% { background-position: 15% 50%; }
`;

export const Nav = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${pan} 30s infinite alternate linear;
`;

export const Link = styled(NavLink)`
  font-weight: 600;
  font-size: 17px;
  line-height: 120%;
  padding: 20px 36px;
  color: #ffffff;
  
  &.active {
    background-image: url(${bgBtn});
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
  }
`;
