import React from 'react';
import Hero from './hero.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  heroes: state.heroes
});

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
