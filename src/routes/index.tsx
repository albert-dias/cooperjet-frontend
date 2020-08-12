import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Development from '../pages/Development';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dev" component={Development}/>
    <Route path="/" exact component={SignIn}/>
  </Switch>
);

export default Routes;
