//import our button maps
import DS4ButtonMap from './ds4buttonmap';
import DS3ButtonMap from './ds3buttonmap';
import DefaultButtonMap from './defaultbuttonmap';

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

export default typeMap;
