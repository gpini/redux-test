import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import BattleField from './scripts/battlefield.jsx';
require('./styles/style.sass')

const heroes = [{
    name: 'Batman',
    hp: 15,
  }, {
    name: 'Iron Man',
    hp: 10
}];

ReactDOM.render(<BattleField heroes={heroes} />, document.getElementById('app'));
