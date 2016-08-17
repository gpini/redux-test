export const ADD_HERO = 'ADD_HERO';

export function addHero(name, hp, power) {
  return {
    type: ADD_HERO,
    name,
    hp,
    power
  };
}
