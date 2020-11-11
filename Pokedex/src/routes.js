import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListPage/>
        </Route>
        <Route exact path="/detalhes/:nomeDoPokemon">
          <DetailPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;

