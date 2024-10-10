import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryBackground};
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo href="#home">
          VisionAI
        </Logo>
        <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;