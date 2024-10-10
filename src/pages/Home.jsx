import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAndroid, FaApple, FaDesktop } from 'react-icons/fa';

const HomeContainer = styled.div`
  text-align: center;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  scroll-snap-align: start;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  color: #FFFFFF;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
`;

const ScreenshotSection = styled(Section)`
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

const ScreenshotContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background-color: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.buttonText : theme.text};
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    color: ${({ theme }) => theme.buttonText};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonText};
  padding: 12px 24px;
  margin: 10px;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.li`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.333% - 2rem);
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Home = () => {
  const [activeTab, setActiveTab] = useState('android');

  const screenshots = {
    android: '/android-screenshot.png',
    ios: '/ios-screenshot.png',
    mac: '/mac-screenshot.png',
  };

  return (
    <HomeContainer>
      <HeroSection id="home">
        <Title>Welcome to VisionAI</Title>
        <Subtitle>Experience the future of visual software powered by AI across Android, iOS, and Mac platforms</Subtitle>
        <DownloadButton href="#download">Get Started</DownloadButton>
      </HeroSection>

      <Section>
        <Title>Key Features</Title>
        <FeatureList>
          <FeatureItem>
            <h3>Advanced Image Recognition</h3>
            <p>Utilize cutting-edge AI to recognize and classify images with high accuracy.</p>
          </FeatureItem>
          <FeatureItem>
            <h3>Real-time Object Detection</h3>
            <p>Detect and track objects in real-time for enhanced visual analysis.</p>
          </FeatureItem>
          <FeatureItem>
            <h3>Intelligent Image Editing</h3>
            <p>Enhance and edit images with AI-powered tools for professional results.</p>
          </FeatureItem>
        </FeatureList>
      </Section>

      <ScreenshotSection id="screenshots">
        <Title>Product Screenshots</Title>
        <TabContainer>
          <Tab active={activeTab === 'android'} onClick={() => setActiveTab('android')}>
            <FaAndroid /> Android
          </Tab>
          <Tab active={activeTab === 'ios'} onClick={() => setActiveTab('ios')}>
            <FaApple /> iOS
          </Tab>
          <Tab active={activeTab === 'mac'} onClick={() => setActiveTab('mac')}>
            <FaDesktop /> Mac
          </Tab>
        </TabContainer>
        <ScreenshotContainer>
          <Screenshot src={screenshots[activeTab]} alt={`${activeTab} screenshot`} />
        </ScreenshotContainer>
        <DownloadButton href={`#${activeTab}`}>Download for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</DownloadButton>
      </ScreenshotSection>

      <Section id="download">
        <Title>Download VisionAI</Title>
        <Subtitle>Choose your platform and start experiencing the power of AI-driven visual software today</Subtitle>
        <DownloadButton href="#android">
          <FaAndroid /> Download for Android
        </DownloadButton>
        <DownloadButton href="#ios">
          <FaApple /> Download for iOS
        </DownloadButton>
        <DownloadButton href="#mac">
          <FaDesktop /> Download for Mac
        </DownloadButton>
      </Section>
    </HomeContainer>
  );
};

export default Home;