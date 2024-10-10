import React from 'react';
import styled from 'styled-components';

const DownloadContainer = styled.div`
  padding: 2rem;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  border-radius: 5px;
`;

function Download() {
  return (
    <DownloadContainer>
      <h2>Download VisionAI</h2>
      <p>Choose your platform to download VisionAI:</p>
      <DownloadButton href="#android">Download for Android</DownloadButton>
      <DownloadButton href="#ios">Download for iOS</DownloadButton>
      <DownloadButton href="#mac">Download for Mac</DownloadButton>
    </DownloadContainer>
  );
}

export default Download;