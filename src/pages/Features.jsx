import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 2rem;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
`;

function Features() {
  return (
    <FeaturesContainer>
      <h2>VisionAI Features</h2>
      <FeaturesList>
        <FeatureItem>Advanced image recognition and classification</FeatureItem>
        <FeatureItem>Real-time object detection and tracking</FeatureItem>
        <FeatureItem>Intelligent image editing and enhancement</FeatureItem>
        <FeatureItem>Cross-platform compatibility (Android, iOS, Mac)</FeatureItem>
        <FeatureItem>Seamless integration with large language models</FeatureItem>
      </FeaturesList>
    </FeaturesContainer>
  );
}

export default Features;