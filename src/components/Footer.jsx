import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 VisionAI. All rights reserved.</p>
      <SocialIcons>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;