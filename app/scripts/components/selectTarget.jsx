import React from 'react';
import HeroSelect from './HeroSelect.jsx'
import { connect } from 'react-redux';
import { hitHero } from '../actions/battlefield.js';
import { HERO_STATUS } from '../reducers/battlefield.js';

const mapStateToProps = (state, ownProps) => ({
  self: ownProps.self,
  battlefield: state.battlefield,
  heroes: state.heroes
});

const mapDispatchToProps = {
  onHeroHit: hitHero
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
      <button
        disabled={
          battlefield.get(self.id).status === HERO_STATUS.CHARGING ||
            battlefield.get(self.id).status === HERO_STATUS.HIDING ||
            battlefield.size < 2
        }
        onClick={() => {
          if (selectedHero) {
            onHeroHit(self, selectedHero);
          }
        }
      }>Hit</button>
      </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTarget);
