import React from 'react';
import HeroSelect from './HeroSelect.jsx'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    self: ownProps.self,
    battlefield: state.battlefield,
    heroes: state.heroes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroHit: (targetHero, power) => {
      dispatch({
        type: 'HIT_HERO',
        target: targetHero.id,
        power
      })
    }
  }
};

class SelectTarget extends React.Component {
    render() {
      const { battlefield, heroes, self, onHeroHit } = this.props;
      let selectedHero;
      return <div className="battlefield">
        <HeroSelect filter={
          hero => {
            return !(self && self.id === hero.id) &&
              battlefield.get(hero.id);
          }}
          onHeroSelect={ selectedHeroId => {
          selectedHero = heroes.filter(hero => {
            return hero.id === selectedHeroId;
          }).get(0);
        }}/>
      <button onClick={() => {
        if (selectedHero) {
          onHeroHit(selectedHero, 3);
        }
      }}>Hit</button>
      </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTarget);