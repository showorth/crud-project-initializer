import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import CrudComponent from './app/CrudComponent';


const Router = () => (
  <div className="Router">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CrudComponent} />
      </Switch>
    </BrowserRouter>
  </div>
);


export default Router;
