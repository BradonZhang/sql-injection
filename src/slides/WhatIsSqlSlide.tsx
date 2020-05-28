import React, { useState } from 'react';
import styled from 'styled-components';

import Slide from '../types/Slide';
import User from '../types/User';
import './TitleSlide.css';

import { users } from './users.json';

const SlideContainer = styled.div`
  /* font-family: Consolas, 'Courier New', Courier, monospace; */
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

const dummyUsername = 'SmartUser';
const dummyPassword = 'abcxyz123';

const WhatIsSqlSlide: Slide = (props) => {
  const [rows, setRows] = useState<Array<User>>([]);
  const [username, setUsername] = useState(dummyUsername);
  const [password, setPassword] = useState(dummyPassword);

  const handleClick = () => setRows(users.filter(
    user => user.username === username && user.password === password)
  );

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => (
    setUsername(e.target.value)
  );

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => (
    setPassword(e.target.value)
  );

  return (
    <SlideContainer>
        <TextContainer>
        <h1>What is SQL?</h1>
        <p><strong>SQL</strong> (<strong>S</strong>tructured <strong>Q</strong>uery <strong>L</strong>anguage) is a text language used to execute queries on databases. A query is a request to retrieve or modify the data in a database.</p>
        <p>In web applications that use SQL, a user sends a request to the server through a user-friendly interface. The server then processes the request, tells the database to run a SQL query, and returns the corresponding data back to the user.</p>
        <br />
        <p>For example, let's say we have a simple <code>users</code> table in our database. This table will contain the <code>username</code>, <code>password</code>, and <code>credit_card</code> of all our users.</p>
        <p>Click the button to run the following query, and see what happens!</p>
        <p><code>SELECT * FROM users WHERE username = '
          <input type='textbox' value={username} onChange={handleUsernameChange} />
          ' AND password = '
          <input type='textbox' value={password} onChange={handlePasswordChange} />
          ';</code></p>
        <p>(You can edit the textboxes to try searching for different usernames and passwords. It won't work unless you know them, though!)</p>
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
              {rows.map(({ username, password, credit_card }) => (
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

export default WhatIsSqlSlide;
