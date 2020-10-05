import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { Router } from "./router/index";
import { UserState } from "./context/users/UserState";
import {NavBar} from "./components/navBar"

function App() {
  return (
      <UserState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Switch>
              <Router />
            </Switch>
          </div>
        </BrowserRouter>
      </UserState>
  );
}

export default App;
