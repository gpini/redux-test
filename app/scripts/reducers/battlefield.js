import { Map } from 'immutable';

export default function battlefield(state = new Map(), action) {
  switch (action.type) {
    case 'ADD_HERO_TO_BATTLE':
      return state.set(action.id, action.hp);
    case 'HIT_HERO':
      let currentHp = state.get(action.target.id);
      currentHp -= action.source.power;
      if (currentHp <= 0) {
        return state.delete(action.target.id);
      }
      return state.set(action.target.id, currentHp);
    default:
      return state;
  }
}
