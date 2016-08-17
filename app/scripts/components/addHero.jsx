import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addHero } from '../actions/heroes.js'

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroAdd: (name, hp, power) => {
      dispatch(addHero(name, hp, power));
    }
  }
};

class AddHero extends React.Component {
    render() {
      const { store, onHeroAdd } = this.props;
      let nameInput;
      let hpInput;
      let powerInput;
      return (
        <div className="addHero" >
          <input ref={node => {
              nameInput = node;
            }} type="text"/>
          <input ref={node => {
              hpInput = node;
            }} type="number"/>
          <input ref={node => {
              powerInput = node;
            }} type="number"/>
          <button onClick={() => {
              if (!nameInput.value || !hpInput.value) {
                return;
              }
              onHeroAdd(nameInput.value, hpInput.value, powerInput.value);
              nameInput.value = '';
              hpInput.value = '';
              powerInput.value = '';
            }
          }>Add Hero</button>
        </div>
      )
    }
};

export default connect(null, mapDispatchToProps)(AddHero);
