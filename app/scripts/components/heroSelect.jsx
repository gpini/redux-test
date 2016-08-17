import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const availableHeroes = state.heroes.filter(ownProps.filter);
  return {
    heroes: availableHeroes,
    onHeroSelect: ownProps.onHeroSelect
  }
};

const NULL_VALUE = '';

class HeroSelect extends React.Component {
    updateValue(value) {
      this.setState({
        value: value
      })
    }
    getValue() {
      return this.state.value;
    }
    resetValue() {
      this.updateValue(NULL_VALUE);
    }
    componentWillMount() {
      // Set the initial value for the state
      this.resetValue();
    }
    componentWillReceiveProps(nextProps) {
      const { heroes } = nextProps;
      const heroFromValue = heroes.find( hero => {
        return hero.id === this.getValue();
      });
      if (this.getValue() !== NULL_VALUE && !heroFromValue) {
        this.resetValue();
      }
    }
    render() {
      const { heroes, onHeroSelect } = this.props;
      let input;
      onHeroSelect(this.getValue());
      return <select className="hero-select"
        value={ this.getValue() }
        ref={ node => {
          input = node;
        }}
        onChange={ () => {
          this.updateValue(input.value);
          onHeroSelect(input.value);
        }}>
        <option value={ NULL_VALUE }>----</option>
        {heroes.map(hero => {
          return <option value={ hero.id } key={ hero.id }>
            { hero.name }
          </option>
        })}
      </select>
    }
}

export default connect(mapStateToProps)(HeroSelect);
