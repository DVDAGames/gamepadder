#gamepad 0.3.2

`gamepad` is a basic JavaScript class for dealing with the intricacies of the HTML 5 Gamepad API.

It currently has fully supported mappings, button naming, and controller naming for these controllers:

* Sony Dual Shock 4
* Sony Dual Shock 3

Future updates will add more controller support and also provide mechanisms for more easily checking for button presses. Currently, you need to call the `gamepad.checkForButtonPress()` method in your game's loop and pass it the `gamepad` object that you want to check for button presses. This will be updated to allow a single `gamepad` method to be used to check every connected gamepad for button presses.

##Contributing

`gamepad` needs your help!

The more controller mappings we can generate, the better. If you have a controller or any input mapping software that you use, please head to the [HTML5 Gamepad Tester](http://html5gamepad.com/) and then fill out the template below:

```js
{
  vendor: '054c', //found after the "Vendor:" in the controller name
  product: '05c4', //found after the "Product:" in the controller name
  name: 'Dual Shock 4', //name of the controller, if it doesn't have a specific name, use the manufacturer and abbreviated model number like Logitech F310
  buttonMap: [
    'X', //What controller button corresponds to B0?
    'Circle', //What controller button corresponds to B1?
    'Square', //What controller button corresponds to B2?
    'Triangle', //What controller button corresponds to B3?
    //... and continue until you've mapped all the buttons
  ],
  stickMap: [
    'LX', //Which stick and axis is Axis 0?
    'LY', //Which stick and axis is Axis 1?
    'RX', //Which stick and axis is Axis 2?
    'RY' //Which stick and axis is Axis 3?
    //.. and continue until you've mapped all the analog sticks
  ]
}
```
If you are comfortable with GitHub and Pull Requests, feel encouraged to submit button mapping PRs with updates to `mappings/typemap.js` and adding a new button map `class` for your controller to the `mappings` directory.

If you aren't comfortable with GitHub and Pull Requests, feel free to add the filled out template above to a GitHub Issue and we'll get your controller added.
