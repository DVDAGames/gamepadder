//import our button maps
import DS4ButtonMap from './ds4buttonmap';
import DS3ButtonMap from './ds3buttonmap';
import DefaultButtonMap from './defaultbuttonmap';

//build our type mapping object
const typeMap = {
  'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)': [
    {
      buttons: 18,
      axes: 4,
      name: 'Dual Shock 4',
      map: new DS4ButtonMap()
    }
  ],
  'PLAYSTATION(R)3 Controller (STANDARD GAMEPAD Vendor: 054c Product: 0268)': [
    {
      buttons: 17,
      axes: 4,
      name: 'Dual Shock 3',
      map: new DS4ButtonMap()
    }
  ],
  'DEFAULT': {
    name: 'Controller',
    map: new DefaultButtonMap()
  }
};

//export typemap object
export default typeMap;
