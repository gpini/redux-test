import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';

export default class AddHero extends React.Component {
    render() {
      const { store } = this.props;
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
              store.dispatch({
                type: 'ADD_HERO',
                id: uuid.v4(),
                name: nameInput.value,
                hp: hpInput.value
              });
              nameInput.value = '';
              hpInput.value = '';
            }
          }>Add Hero</button>
        </div>
      )
    }
};
