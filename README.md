#gamepad 0.2.0

`gamepad` is a basic JavaScript class for dealing with the intricacies of the HTML 5 Gamepad API.

It currently has fully supported mappings, button naming, and controller naming for these controllers:

* Sony Dual Shock 4
* Sony Dual Shock 3

Future updates will add more controller support and also provide mechanisms for more easily checking for button presses. Currently, you need to call the `gamepad.checkForButtonPress()` method in your game's loop and pass it the `gamepad` object that you want to check for button presses. This will be updated to allow a single `gamepad` method to be used to check every connected gamepad for button presses.
