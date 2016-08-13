import { List } from 'immutable';
import uuid from 'uuid';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import BattleField from './scripts/components/battlefield.jsx';
import AddHero from './scripts/components/addHero.jsx';
require('./styles/style.sass');
import heroes from './scripts/reducers/heroes.js';

let initialHeroes = new List([
  {
    id: uuid.v4(),
    name: 'Batman',
    hp: 15,
  },
  {
    id: uuid.v4(),
    name: 'Iron Man',
    hp: 10
  }
]);

const store = createStore(heroes, initialHeroes);
const render = () => {
  ReactDOM.render(
    <div>
      <AddHero store={ store } />
      <BattleField store={ store } />
    </div>,
    document.getElementById('app'));
}

render();
store.subscribe(() => {
  render();
  // console.log(store.getState());
});
