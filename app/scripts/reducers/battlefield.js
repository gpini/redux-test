import { Map } from 'immutable';
import { ADD_HERO_TO_BATTLE, HIT_HERO, HIDE_HERO_START, HIDE_HERO_END } from '../actions/battlefield.js';

export const HERO_STATUS = {
  IDLE: 'IDLE',
  CHARGING: 'CHARGING',
  HIDING: 'HIDING'
};

function isHittable(status) {
  return status !== HERO_STATUS.HIDING;
}

export default function battlefield(state = new Map(), action) {
  let current;
  switch (action.type) {
    case ADD_HERO_TO_BATTLE:
      return state.set(action.id, {
        hp: action.hp,
        status: HERO_STATUS.IDLE
      });
    case HIT_HERO:
      if (state.get(action.target.id)) {
        current = _.clone(state.get(action.target.id));
        if (isHittable(current.status)) {
          current.hp -= action.source.power;
          if (current.hp <= 0) {
            return state.delete(action.target.id);
          }
          return state.set(action.target.id, current);
        }
      }
      return state;
    case HIDE_HERO_START:
      if (state.get(action.hero.id)) {
        current = _.clone(state.get(action.hero.id));
        current.status = HERO_STATUS.HIDING;
        return state.set(action.hero.id, current);
      }
      return state;
    case HIDE_HERO_END:
      if (state.get(action.hero.id)) {
        current = _.clone(state.get(action.hero.id));
        current.status = HERO_STATUS.IDLE;
        return state.set(action.hero.id, current);
      }
      return state;
    default:
      return state;
  }
}
