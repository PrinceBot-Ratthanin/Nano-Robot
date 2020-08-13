const app = require("electron").remote;
const nativeImage = require("electron").nativeImage;
const dialog = app.dialog;


module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks['display_status'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Display status")
        .appendField(new Blockly.FieldDropdown([["Show","1"], ["Clear","2"]]), "ch")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
    }
  };
  Blockly.Blocks["i2c128x64_display_clear"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Clear display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("clear display");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["i2c128x64_display_display"] = {
    init: function() {
      let f = new Blockly.FieldTextInput("C4,D4,E4");
      f.onMouseDown_ = (e) => {
        Blockly.music(f.getValue(), function(newNote) {
          f.setValue(newNote.join(","));
          f.init();
        });
        return e;
      };
      this.appendDummyInput()
        .appendField("Show display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("display everything to screen");
      this.setHelpUrl("");

    }
  };

  Blockly.Blocks["i2c128x64_display_print"] = {
    init: function() {
      this.appendValueInput("text")
        .setCheck(["Number", "String"])
        .appendField("Display Print");
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendDummyInput()
        .appendField("Size")
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"], ["3","3"], ["4","4"]]), "size");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("display string at x,y");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["analog_read_nano_robot"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Analog Read")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (14)", "14"],
                                              ["A1 (15)", "15"],
                                              ["A2 (16)", "16"],
                                              ["A3 (17)", "17"],
                                              ["A6 (19)", "19"],
                                              ["A7 (20)", "20"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['nano_servo'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("set servo")
        .appendField(new Blockly.FieldDropdown([["D11","1"], ["D8","2"], ["D7","3"], ["D4","4"]]), "ch");
      this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("degree");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_Motor'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward","2"], ["TrunLeft","3"], ["TrunRight","4"], ["SpinLeft","5"], ["SpinRight","6"]]), "ch");
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_forward'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Move Forward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_backward'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Move Backward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_forward2'] = {
    init: function() {
      this.appendValueInput("speed1")
        .setCheck("Number")
        .appendField("M1 Forward speed");
      this.appendDummyInput()
        .appendField("%");
        this.appendValueInput("speed2")
        .setCheck("Number")
        .appendField("M2 Forward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_backward2'] = {
    init: function() {
      this.appendValueInput("speed1")
        .setCheck("Number")
        .appendField("M1 Backward speed");
      this.appendDummyInput()
        .appendField("%");
        this.appendValueInput("speed2")
        .setCheck("Number")
        .appendField("M2 Backward speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_turn_left'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Turn Left at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_turn_right'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Turn Right at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_spin_left'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Left at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_spin_right'] = {
    init: function() {
      this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Spin Right at speed");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_stop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stop Moving");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_motor_stop_ch'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Stop Moving ")
        .appendField(new Blockly.FieldDropdown([["ALL","3"], ["1","1"], ["2","2"]]), "ch")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['button_1_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
          .appendField("SW1 is pressed");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("get SW1 pressed or not");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['sw1_press'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Wait SW1 is pressed")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['nano_beep'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer status")
        .appendField(new Blockly.FieldDropdown([["beep","3"], ["On","1"], ["Off","2"]]), "ch")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
      this.setTooltip("");
    }
  };


};
