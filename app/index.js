import _ from 'lodash';
import * as lib from './scripts/array'
require('./styles/style.css')

//debugger;
lib.log(lib.array);
const mappedArray = _.map(lib.array, function(n) { return n * 3; });
lib.log(mappedArray);

document.write("It worked.");
