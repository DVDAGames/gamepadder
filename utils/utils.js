//basic utility methods for gamepad
const gamepadUtils = {
  //Chrome gives you a GamepadList instead of an Array, let's fix that
  convertGamePadListToArray(gamepadList) {
    //use the Array.prototype.slice.call() trick to convert this Array-like Object into an Array
    return [].slice.call(gamepadList);
  },

  //check for connected gamepads and return them as an Array
  getGamepads() {
    //check to see if we have gamepads
    let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

    //if we weren't given an Array
    if(!Array.isArray(gamepads)) {
      //convert what we were given into an array
      gamepads = this.convertGamePadListToArray(gamepads);
    }

    //return Array of gamepads
    return gamepads;
  },
};

//make our utils available
export default gamepadUtils;
