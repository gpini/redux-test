import {List} from 'immutable';
import _ from 'lodash';

const hero = function (state, action) {
  switch (action.type) {
    case 'ADD_HERO':
      return {
        name: action.name,
        hp: action.hp,
        id: action.id
      };
    default:
      return state;
  }
};

export default function heroes(state = new List(), action) {
  switch (action.type) {
    case 'ADD_HERO':
      return state.push(hero(undefined, action));
    default:
      return state;
  }
}
