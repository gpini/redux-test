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
    case 'HIT_HERO':
      if (hero.id == action.destId) {
        const woundedHero = _.clone(hero);
        woundedHero.hp -= action.power;
        return woundedHero;
      }
      return hero;
    default:
      return state;
  }
};

export default function heroes(state = new List(), action) {
  switch (action.type) {
    case 'ADD_HERO':
      return state.push(hero(undefined, action));
    case 'HIT_HERO':
      return state.map(hero => {
        return hero(hero, action);
      });
    default:
      return state;
  }
}
