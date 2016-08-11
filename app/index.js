import { List } from 'immutable';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import BattleField from './scripts/components/battlefield.jsx';
require('./styles/style.sass')

let heroes = new List();

heroes = heroes.push({
    id: 1,
    name: 'Batman',
    hp: 15,
});
heroes = heroes.push({
    id: 2,
    name: 'Iron Man',
    hp: 10
});

//createStore();

ReactDOM.render(<BattleField heroes={heroes} />, document.getElementById('app'));
