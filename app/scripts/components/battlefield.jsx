import React from 'react';
import Hero from './hero.jsx';
import AddToBattle from './addToBattle.jsx'
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
    onBattleAdd: (id, hp) => {
      dispatch({
        type: 'ADD_HERO_TO_BATTLE',
        id: heroId,
        hp: hp
      })
    }
  }
};

class BattleField extends React.Component {
    render() {
      const { battlefield, heroes } = this.props;
      let selectedHero;
      return <div className="battlefield">
        <AddToBattle />
        {
          heroes.filter( hero => {
            return battlefield.get(hero.id) != null;
          }).map( hero => {
            return <div key={ hero.id }>
              { hero.name } - { battlefield.get(hero.id) }
            </div>
          })
        }
      </div>
    }
};

export default connect(mapStateToProps)(BattleField);
