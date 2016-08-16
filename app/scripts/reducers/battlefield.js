import { Map } from 'immutable';

export default function battlefield(state = new Map(), action) {
  switch (action.type) {
    case 'ADD_HERO_TO_BATTLE':
      return state.set(action.id, action.hp);
    case 'HIT_HERO':
      let currentHp = state.get(action.dest);
      currentHp -= action.power;
      if (currentHp <= 0) {
        state.delete(action.dest);
      }
      return state.set(action.dest, currentHp);
    default:
      return state;
  }
}
