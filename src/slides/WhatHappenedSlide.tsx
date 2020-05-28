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

const WhatHappenedSlide: Slide = (props) => {
  return (
    <SlideContainer>
        <TextContainer>
        <h1>What Happened?</h1>
        <p>The software engineers for our example application did not sanitize user inputs.</p>
        <p>In other words, the application does not check if the user's input would alter the SQL query; user input is directly inserted into the query, which is interpreted by the database as something else entirely.</p>
        <p>In this particular case, <code>OR 1=1</code> is always true (1 always equals 1), so all users in the database satisfy the query. Hence, all users show up in the final result, and the attacker has access to all users' private information.</p>
        <br />
        <p>SQL injection attacks can be very costly and can put millions of people's privacy at risk.</p>
        <p>In 2009, Albert Gonzalez stole 130-140 million credit and debit card numbers using SQL injection attacks against 7-Eleven, Heartland Payment Systems, and Hannaford Brothers.</p>
        <p>As of 2017, injection attacks remain the most common type of cyberattack.</p>
      </TextContainer>
    </SlideContainer>
  );
};

export default WhatHappenedSlide;
