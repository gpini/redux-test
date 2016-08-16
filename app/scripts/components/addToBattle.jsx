import React from 'react';
import HeroSelect from './HeroSelect.jsx'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    battlefield: state.battlefield,
    heroes: state.heroes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBattleAdd: (selectedHero) => {
      dispatch({
        type: 'ADD_HERO_TO_BATTLE',
        id: selectedHero.id,
        hp: selectedHero.hp
      })
    }
  }
};

class AddToBattle extends React.Component {
    render() {
      const { battlefield, heroes, onBattleAdd } = this.props;
      let selectedHero;
      return <div className="battlefield">
        <HeroSelect filter={
          hero => {
            return !battlefield.get(hero.id);
          }}
          onHeroSelect={ selectedHeroId => {
          selectedHero = heroes.filter(hero => {
            return hero.id === selectedHeroId;
          }).get(0);
        }}/>
      <button onClick={() => {
          if (selectedHero) {
            onBattleAdd(selectedHero);
          }
      }}>Add to battle</button>
      </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToBattle);
