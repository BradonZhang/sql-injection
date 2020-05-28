import React from 'react';
import styled from 'styled-components';

import Slide from '../types/Slide';
import './TitleSlide.css';

const SlideContainer = styled.div`
  color: #00c000;
  width: 100vw;
  min-height: 100vh;
  background-color: #202020;
  overflow-x: hidden;
  justify-content: center;
  flex: 1;
  text-align: left;
`;

const TextContainer = styled.div`
  width: 40%;
  padding-left: 10%;
`;

const AnalysisMethodSlide: Slide = (props) => {
  return (
    <SlideContainer>
        <TextContainer>
        <h1>Analysis Method: Penetration Testing</h1>
        <p><strong>Penetration testing</strong> (pen-testing) is a preventative destructive method of failure analysis which aims to find holes in an application's security.</p>
        <p>Testers attack a version of the application to try to find weaknesses or security flaws; testing often includes SQL injection attacks.</p>
        <p>If penetration testers can access information they're not supposed to, developers can change their code to eliminate the security flaws before shipping an application to production.</p>
        <p>Cybersecurity is important! It's best to hire professionals to test an application's security.</p>
      </TextContainer>
    </SlideContainer>
  );
};

export default AnalysisMethodSlide;
