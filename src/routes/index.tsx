import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Development from '../pages/Development';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import About from '../pages/About';
import Home from '../pages/Home';
import Request from '../pages/Request';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Development}/>
    <Route path="/login" component={SignIn}/>
    <Route path="/cadastro" component={SignUp}/>
    <Route path="/sobre" component={About}/>
    <Route path="/home" component={Home}/>
    <Route path="/solicitar" component={Request}/>
    <Route path="/contato" component={Contact}/>
  </Switch>
);

export default Routes;
