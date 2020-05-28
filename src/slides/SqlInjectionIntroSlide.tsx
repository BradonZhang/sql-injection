import React, { useState } from 'react';
import styled from 'styled-components';

import Slide from '../types/Slide';
import './TitleSlide.css';

import { users } from './users.json';

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

const QueryResults = styled.div`
  height: 20vh;
  overflow-y: scroll;
`;

const Injection = styled.span`
  color: #e00000;
`;

const dummyUsername = 'SmartUser';

const SqlInjectionIntroSlide: Slide = (props) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => setRevealed(true);

  return (
    <SlideContainer>
        <TextContainer>
        <h1>SQL Injection: An Overview</h1>
        <p><strong>SQL injection</strong> is a cyberattack technique in which a user tricks a database into changing the SQL queries it's supposed to run.</p>
        <p>This is done by disguising fragments of SQL code as normal user input.</p>
        <br />
        <p>Returning to the previous example, let's say the user inputted their password as <code><Injection>' OR 1=1;--</Injection></code>.</p>
        <p>Click the button to run the following query, and notice what changed from the last demo.</p>
        <p><code>SELECT * FROM users WHERE username = '{dummyUsername}' AND password = '<Injection>' OR 1=1;--</Injection>';</code></p>
        <button onClick={handleClick}>Run Query</button>
        <QueryResults>
          <table>
            <thead>
              <tr>
                <th>username</th>
                <th>password</th>
                <th>credit_card</th>
              </tr>
            </thead>
            <tbody>
              {revealed && users.map(({ username, password, credit_card }) => (
                <tr key={username}>
                  <td>{username}</td>
                  <td>{password}</td>
                  <td>{credit_card}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </QueryResults>
      </TextContainer>
    </SlideContainer>
  );
};

export default SqlInjectionIntroSlide;
