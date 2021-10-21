import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import VotingComponent from './VotingComponent';
import ConfirmationComponent from './ConfirmationComponent';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Welcome}></Route>
      <Route exact path='/vote' component={VotingComponent}></Route>
      <Route exact path='/vote' component={ConfirmationComponent}></Route>
    </Switch>
  );
}

export default Main;