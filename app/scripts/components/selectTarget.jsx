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
    onHeroHit: (sourceHero, targetHero) => {
      dispatch({
        type: 'HIT_HERO',
        target: targetHero,
        source: sourceHero
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
          onHeroHit(self, selectedHero);
        }
      }}>Hit</button>
      </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTarget);
