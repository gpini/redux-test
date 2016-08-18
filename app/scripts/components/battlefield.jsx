import React from 'react';
import Hero from './hero.jsx';
import AddToBattle from './addToBattle.jsx';
import SelectTarget from './selectTarget.jsx';
import { hideHero } from '../actions/battlefield.js';
import { HERO_STATUS } from '../reducers/battlefield.js';
import { connect } from 'react-redux';
import { Map } from 'immutable';

const mapStateToProps = (state) => {
  return {
    battlefield: state.battlefield,
    heroes: state.heroes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroHide: (hero) => {
      dispatch(hideHero(hero));
    }
  }
};

class BattleField extends React.Component {
    render() {
      const { battlefield, heroes, onHeroHide } = this.props;
      let selectedHero;
      return <div className="battlefield">
        <AddToBattle />
        {
          heroes.filter( hero => {
            return battlefield.get(hero.id) != null;
          }).map( hero => {
            return <div key={ hero.id }>
              { hero.name } - { battlefield.get(hero.id).hp }/{ hero.hp } -
                { hero.power }
              <div>{ battlefield.get(hero.id).status }</div>
              <SelectTarget self={ hero }></SelectTarget>
              <button disabled={
                  battlefield.get(hero.id).status === HERO_STATUS.CHARGING ||
                    battlefield.get(hero.id).status === HERO_STATUS.HIDING
                }
                onClick={ () => {
                  onHeroHide(hero);
                }
              }>Hide</button>
            </div>
          })
        }
      </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
