import React from 'react';
import Hero from './hero.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    heroes: state
  }
};

class BattleField extends React.Component {
    render() {
      const { heroes } = this.props;
      return <div className="battlefield">
        {heroes.map(hero => {
          return <Hero hero={ hero } key={ hero.id } />
        })}
      </div>
    }
};

export default connect(mapStateToProps)(BattleField);
