//button and stick mapping for a Dual Shock 3 controller
class DS3ButtonMap {
  constructor() {
    this.buttonMap = [
      'X',
      'Circle',
      'Square',
      'Triangle',
      'L1',
      'R1',
      'L2',
      'R2',
      'Select',
      'Start',
      'L3',
      'R3',
      'Up',
      'Down',
      'Left',
      'Right',
      'PS'
    ];

    this.stickMap = [
      'LX',
      'LY',
      'RX',
      'RY'
    ];
  }
};

module.exports = DS3ButtonMap;
