import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const availableHeroes = state.heroes.filter(ownProps.filter);
  return {
    heroes: availableHeroes,
    onHeroSelect: ownProps.onHeroSelect
  }
};

class HeroSelect extends React.Component {
    render() {
      const { heroes, onHeroSelect } = this.props;
      let input;
      return <select className="hero-select"
        ref={ node => {
          input = node;
        }}
        onChange={ () => {
          onHeroSelect(input.value)
        }}>
        <option value="">----</option>
        {heroes.map(hero => {
          return <option value={ hero.id } key={ hero.id }>
            { hero.name }
          </option>
        })}
      </select>
    }
};

export default connect(mapStateToProps)(HeroSelect);
