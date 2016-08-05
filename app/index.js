import _ from 'lodash';
import array from './scripts/array'
require('./styles/style.css')

const pippo = _.map(array, function(n) { return n * 3; });
console.log(pippo);

document.write("It works.");
