import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Development from '../pages/Development';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Development}/>
  </Switch>
);

export default Routes;
