import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Development from '../pages/Development';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Development}/>
    <Route path="/login" component={SignIn}/>
    <Route path="/cadastro" component={SignUp}/>
  </Switch>
);

export default Routes;
