import { List, Map } from 'immutable';
import uuid from 'uuid';
import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import Heroes from './scripts/components/heroes.jsx';
import Battle from './scripts/components/battle.jsx';
import TabBar from './scripts/components/tabbar.jsx';
require('./styles/style.sass');
import heroes from './scripts/reducers/heroes.js';
import battlefield from './scripts/reducers/battlefield.js';

const batmanId = uuid.v4();
const batmanHp = 15;
let initialHeroes = new List([
  {
    id: batmanId,
    name: 'Batman',
    hp: batmanHp,
  },
  {
    id: uuid.v4(),
    name: 'Iron Man',
    hp: 10
  }
]);

const reducers = combineReducers({
  heroes: heroes,
  battlefield: battlefield
});
const store = createStore(reducers, {
  heroes: initialHeroes
});
ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route component={ TabBar } >
        <Route path="/heroes" component={ Heroes } />
        <Route path="/" component={ Battle } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
