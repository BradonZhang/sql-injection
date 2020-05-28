import React from 'react';
import Slide from '../types/Slide';
import styled from 'styled-components';

const SlideContainer = styled.div`
  font-family: Consolas, 'Courier New', Courier, monospace;
  color: #00c000;
  width: 100vw;
  background-color: #202020;
  overflow-x: hidden;
  justify-content: center;
  flex: 1;
  text-align: left;
`;

const TextContainer = styled.div`
  width: 80%;
  padding: 0 10%;
`;

const ReferencesSlide: Slide = (props) => {
  return (
    <div>
      <SlideContainer>
        <TextContainer>
          <h1>References</h1>
        </TextContainer>
      </SlideContainer>
    </div>
  );
};

export default ReferencesSlide;
