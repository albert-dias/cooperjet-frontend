import React from 'react'
import { Switch } from 'react-router-dom';

import Route from './Route'

import Development from '../pages/Development';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import About from '../pages/About';
import Home from '../pages/Home';
import Request from '../pages/Request';
import Contact from '../pages/Contact';
import DashBoard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/dev"  component={Development}/>
    <Route path="/login" component={SignIn}/>
    <Route path="/cadastro" component={SignUp}/>
    <Route path="/sobre" component={About}/>
    <Route path="/contato" component={Contact}/>
    <Route path="/solicitar" component={Request} isPrivate/>
    <Route path="/dashboard" component={DashBoard} isPrivate/>
  </Switch>
);

export default Routes;
