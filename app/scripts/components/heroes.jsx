import React from 'react';
import HeroList from './heroList.jsx';
import AddHero from './addHero.jsx';

export default class Heroes extends React.Component {
    render() {
      return <div>
        <AddHero />
        <HeroList />
      </div>
    }
};
