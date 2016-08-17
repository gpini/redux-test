export const ADD_HERO_TO_BATTLE = 'ADD_HERO_TO_BATTLE';
export const HIT_HERO = 'HIT_HERO';

export function addHeroToBattle(id, hp) {
  return {
    type: ADD_HERO_TO_BATTLE,
    id,
    hp
  };
}

export function hitHero(source, target) {
  return {
    type: HIT_HERO,
    source,
    target
  };
}
