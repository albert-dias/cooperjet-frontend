import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Development from '../pages/Development';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Development}/>
    <Route path="/login" exact component={SignIn}/>
    <Route path="/cadastro" exact component={SignUp}/>
  </Switch>
);

export default Routes;
