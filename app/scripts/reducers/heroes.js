import {List} from 'immutable';

export default function heroes(state = new List(), action) {
  switch (action.type) {
    case 'ADD_HERO':
      state.push({
        name: action.name,
        hp: action.hp,
        id: action.id
      })
  }
}
