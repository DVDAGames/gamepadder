import typeMap from './mappings/typemap';
import gamepadUtils from './utils/utils';

//Gamepad Class
class gamepad {
  //generate a new gamepad object
  constructor({ index, id, buttons, axes, mapping, connected }) {
    //set default parameters for controller
    this.id = index;
    this.name = id;
    this.buttons = buttons;
    this.axes = axes;
    this.mappingType = mapping;
    this.connected = connected;
    this.previousButtons = {};

    //get the specific controller type and it's button and stick mapping
    const  { name, map: { buttonMap, stickMap } } = this.setType();

    //store display name
    this.displayName = name;

    //set default options for this controller
    this.options = {
      sensitivity: {
        x: 5,
        y: 5
      },
      deadzone: {
        L: 0.25,
        R: 0.25
      },
      buttonMap,
      stickMap
    };
  }

  //get the type of controller based on the gamepad id, number of buttons, and number of axes
  setType() {
    //check to see if we have a mapping and display name for this controller ID
    const type = typeMap[this.name];

    //if we found our controller ID in our type map
    if(type && type.length) {
      let controller;

      //iterate through any controllers that might also share this name
      const controllerFound = type.some((controllerType) => {
        const {
          buttons,
          name,
          axes,
          map
        } = controllerType;

        //if this controller has the right number of buttons and axes
        if(buttons === this.buttons.length && axes === this.axes.length) {
          //set the controller to this type
          controller = controllerType;

          //return true to exit our .some() iterator
          return true;
        }
      });

      //return the controller information
      return controller;
    //if we didn't find our controller ID
    } else {
      //return the default mapping and generic display name
      return typeMap.DEFAULT;
    }
  }

  //check the current gamepad object for button presses and register those presses on our controller object
  checkForButtonPress(gamepad) {
    if(gamepad.buttons.length) {
      this.buttons.forEach((button, index) => {
        const buttonName = this.options.buttonMap[index];
        const pressed = gamepad.buttons[index].value > 0.5;

        this.previousButtons[buttonName] = pressed
      });
    }
  }
}

//make the gamepad class and its utils available
export {
  gamepad,
  gamepadUtlls
};
