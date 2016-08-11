import React from 'react';

export default class Hero extends React.Component {
    render() {
      const { hero } = this.props;
      return (
        <div className="hero">
          <div> { hero.name } </div>
          <div> { hero.hp } </div>
        </div>
      )
    }
};
