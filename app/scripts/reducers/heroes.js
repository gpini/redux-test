import { List } from 'immutable';
import uuid from 'uuid';
import { ADD_HERO } from '../actions/heroes.js';

const hero = function (state, action) {
  switch (action.type) {
    case ADD_HERO:
      return {
        name: action.name,
        hp: action.hp,
        id: uuid.v4(),
        power: action.power
      };
    default:
      return state;
  }
};

export default function heroes(state = new List(), action) {
  switch (action.type) {
    case ADD_HERO:
      return state.push(hero(undefined, action));
    default:
      return state;
  }
}
