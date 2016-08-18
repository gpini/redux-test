import { expect } from 'chai';
import heroes from '../reducers/heroes.js';
import { addHero } from '../actions/heroes.js';

describe('Heroes reducer', () => {
  it('should return default state', () => {
    expect(heroes(undefined, { type: undefined }).size).to.equal(0);
  })
  it('should add an hero', () => {
    let state = heroes(undefined, addHero('Hulk', 5, 15));
    expect(state.size).to.equal(1);
    expect(state.get(0).name).to.equal('Hulk');
    expect(state.get(0).hp).to.equal(5);
    expect(state.get(0).power).to.equal(15);
    expect(state.get(0)).to.have.property('id');
  })
})
