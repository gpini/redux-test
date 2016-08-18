export const ADD_HERO_TO_BATTLE = 'ADD_HERO_TO_BATTLE';
export const HIT_HERO_START = 'HIT_HERO_START';
export const HIT_HERO_END = 'HIT_HERO_END';
export const HIDE_HERO_START = 'HIDE_HERO_START';
export const HIDE_HERO_END = 'HIDE_HERO_END';

export function addHeroToBattle(id, hp) {
  return {
    type: ADD_HERO_TO_BATTLE,
    id,
    hp
  };
}

function hitHeroStart(source, target) {
  return {
    type: HIT_HERO_START,
    source,
    target
  };
}

function hitHeroEnd(source, target) {
  return {
    type: HIT_HERO_END,
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

export function hitHero(source, target) {
  return (dispatch) => {
    dispatch(hitHeroStart(source, target));
    setTimeout(() => {
      dispatch(hitHeroEnd(source, target));
    }, 3000);
  }
}
