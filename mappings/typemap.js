//import our button maps
const DS4ButtonMap = require('./ds4buttonmap');
const DS3ButtonMap = require('./ds3buttonmap');
const DefaultButtonMap = require('./defaultbuttonmap');

//build our type mapping object
const typeMap = [
  {
    vendor: 'any',
    product: 'any',
    name: 'Generic Controller',
    map: new DefaultButtonMap()
  },
  {
    vendor: '054c',
    product: '05c4',
    name: 'Dual Shock 4',
    map: new DS4ButtonMap()
  },
  {
    vendor: '054c',
    product: '0268',
    name: 'Dual Shock 3',
    map: new DS3ButtonMap()
  }
];

module.exports = typeMap;
