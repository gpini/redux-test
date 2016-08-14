import React from 'react';
import Hero from './hero.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    heroes: state
  }
};

class HeroList extends React.Component {
    render() {
      const { heroes } = this.props;
      return <div className="hero-list">
        {heroes.map(hero => {
          return <Hero hero={ hero } key={ hero.id } />
        })}
      </div>
    }
};

export default connect(mapStateToProps)(HeroList);
