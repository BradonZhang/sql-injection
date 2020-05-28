import React from 'react';
import styled from 'styled-components';

import Slide from '../types/Slide';
import './TitleSlide.css';

const SlideContainer = styled.div`
  font-family: Consolas, 'Courier New', Courier, monospace;
  color: #00c000;
  width: 100vw;
  min-height: 100vh;
  background-color: #202020;
  overflow-x: hidden;
  justify-content: center;
  flex: 1;
`;

const TitleContainer = styled.div`
  padding: 15vh 0 5vh;
`;

const TitleText = styled.h1`
  font-size: 72px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 5vh 0;
`;

const SubtitleText = styled.h2`
  opacity: 0.8;
  margin: 0px;
  width: 33%;
`;

const NameText = styled.h1`
  padding: 20px;
`

const TitleSlide: Slide = (props) => {
  return (
    <SlideContainer>
      <TitleContainer>
        <TitleText>SQL Injection</TitleText>
      </TitleContainer>
      <Subtitle>
        <SubtitleText>What it is</SubtitleText>
        <SubtitleText>Why it happens</SubtitleText>
        <SubtitleText>How to stop it</SubtitleText>
      </Subtitle>
      <NameText>Bradon Zhang</NameText>
      <p>ENC3254: ECO Visualizing Failure</p>
    </SlideContainer>
  );
};

export default TitleSlide;
