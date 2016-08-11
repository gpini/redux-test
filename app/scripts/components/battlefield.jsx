import React from 'react';
import Hero from './hero.jsx'

export default class BattleField extends React.Component {
    render() {
      return <div className="battlefield">
        {this.props.heroes.map(hero => {
          return <Hero hero={ hero } key={ hero.id } />
        })}
      </div>
    }
};
