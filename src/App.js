import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import styled from "styled-components";
import Chat from "./components/Chat/Chat";
import "./App.css";
const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
