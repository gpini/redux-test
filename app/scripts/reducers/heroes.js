import {List} from 'immutable';
import _ from 'lodash';

export default function heroes(state = new List(), action) {
  switch (action.type) {
    case 'ADD_HERO':
      return state.push({
        name: action.name,
        hp: action.hp,
        id: action.id
      });
    case 'HIT_HERO':
      return state.map(hero => {
        if (hero.id == action.destId) {
          const woundedHero = _.clone(hero);
          woundedHero.hp -= action.power;
          return woundedHero;
        }
        return hero;
      });
    default:
      return state;
  }
}
