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

const TakeawaysSlide: Slide = (props) => {
  return (
    <SlideContainer>
        <TextContainer>
        <h1>Takeaways</h1>
        <p>Clearly, the example given is a simplification. Real applications have database schemas that are much more complicated, and real applications (hopefully) don't store passwords in plain text.</p>
        <p>However, the takeaway for developers is the same: user input should <strong>not</strong> be trusted. Sanitize all user input!</p>
        <p>Fortunately, many resources are available to responsible software engineers to make sanitation easy. SQL libraries in many different languages, such as Python, have user input sanitation built in.</p>
        <p>With just some simple integration of mindful coding practices and preventative methods such as penetration testing, web applications become that much more secure.</p>
      </TextContainer>
    </SlideContainer>
  );
};

export default TakeawaysSlide;
