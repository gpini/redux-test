export const ADD_HERO_TO_BATTLE = 'ADD_HERO_TO_BATTLE';
export const HIT_HERO = 'HIT_HERO';
export const HIDE_HERO_START = 'HIDE_HERO_START';
export const HIDE_HERO_END = 'HIDE_HERO_END';

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

function hideHeroStart(hero) {
  return {
    type: HIDE_HERO_START,
    hero
  };
}

function hideHeroEnd(hero) {
  return {
    type: HIDE_HERO_END,
    hero
  };
}

export function hideHero(hero) {
  return (dispatch) => {
    dispatch(hideHeroStart(hero));
    setTimeout(() => {
      dispatch(hideHeroEnd(hero));
    }, 3000);
  }
}
