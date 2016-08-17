import React from 'react';

export default class Hero extends React.Component {
    render() {
      const { hero } = this.props;
      return (
        <div className="hero" >
          <div> { hero.name } </div>
          <div> HP { hero.hp } </div>
          <div> Power { hero.power } </div>
        </div>
      )
    }
};
