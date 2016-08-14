import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoAdd: (name, hp) => {
      dispatch({
        type: 'ADD_HERO',
        id: uuid.v4(),
        name: name,
        hp: hp
      });
    }
  }
};

class AddHero extends React.Component {
    render() {
      const { store, onTodoAdd } = this.props;
      let nameInput;
      let hpInput;
      return (
        <div className="addHero" >
          <input ref={node => {
              nameInput = node;
            }} type="text"/>
          <input ref={node => {
              hpInput = node;
            }} type="number"/>
          <button onClick={() => {
              if (!nameInput.value || !hpInput.value) {
                return;
              }
              onTodoAdd(nameInput.value, hpInput.value);
              nameInput.value = '';
              hpInput.value = '';
            }
          }>Add Hero</button>
        </div>
      )
    }
};

export default connect(null, mapDispatchToProps)(AddHero);
