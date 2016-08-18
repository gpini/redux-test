import { Map } from 'immutable';
import {
  ADD_HERO_TO_BATTLE,
  HIT_HERO_START,
  HIT_HERO_END,
  HIDE_HERO_START,
  HIDE_HERO_END
} from '../actions/battlefield.js';

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
    case HIT_HERO_START:
      if (state.get(action.source.id)) {
        current = _.clone(state.get(action.source.id));
        current.status = HERO_STATUS.CHARGING;
        return state.set(action.source.id, current);
      }
      return state;
    case HIT_HERO_END:
      if (state.get(action.target.id)) {
        let tmpState = state;
        let currentSource = _.clone(state.get(action.source.id));
        let currentTarget = _.clone(state.get(action.target.id));
        currentSource.status = HERO_STATUS.IDLE;
        tmpState = tmpState.set(action.source.id, currentSource);
        if (isHittable(currentTarget.status)) {
          currentTarget.hp -= action.source.power;
          if (currentTarget.hp <= 0) {
            return tmpState.delete(action.target.id);
          }
          return tmpState.set(action.target.id, currentTarget);
        }
        return tmpState;
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
