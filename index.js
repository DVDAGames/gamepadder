const typeMap = require('./mappings/typemap');
const GamepadderUtils = require('./utils/utils');

//Gamepadder Class
class Gamepadder {
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
    this.buttonPresses = {};

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
    const test = GamepadderUtils.parseControllerID(this.name);

    //use generic controller map by default
    let type = typeMap[0];

    typeMap.some((gamePadType) => {
      if(gamePadType.vendor === test.vendor && gamePadType.product === test.product) {
        type = gamePadType;

        return true;
      }
    });

    //return the controller information
    return type;
  }

  //check the current gamepad object for button presses and register those presses on our controller object
  checkForButtonPress(gamepad) {
    if(gamepad && gamepad.buttons.length) {
      this.previousButtons = this.buttonPresses;

      this.buttonPresses = {};

      this.buttons.forEach((button, index) => {
        const buttonName = this.options.buttonMap[index];
        const pressed = gamepad.buttons[index].value > 0.5;

        this.buttonPresses[buttonName] = pressed
      });
    }

    return this;
  }
}

//make the gamepadder class and its utils available
module.exports = {
  Gamepadder,
  GamepadderUtils
};
