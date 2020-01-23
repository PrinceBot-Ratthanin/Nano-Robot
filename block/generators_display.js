const nativeImage = require("electron").nativeImage;
module.exports = function(Blockly){
  'use strict';

  Blockly.JavaScript["i2c128x64_display_clear"] = function(block) {
    var code = "display.clearDisplay();\n";
    return code;
  };

  Blockly.JavaScript["i2c128x64_display_display"] = function(block) {
    var code = "display.display();\n";
    return code;
  };
  Blockly.JavaScript["i2c128x64_display_print"] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block,"text",Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,"x",Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,"y",Blockly.JavaScript.ORDER_ATOMIC);
    var value_Size = block.getFieldValue('size');
    var code =
      `
      display.setTextSize(${value_Size});
      display.setCursor(${value_x},${value_y});
      display.println(${value_text});
      `;
    return code;
  };
  Blockly.JavaScript['nano_servo'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
    return code;
  };
  Blockly.JavaScript['nano_Motor'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = 'motor_action(' + dropdown_ch + ', ' + value_speed + ', ' + value_speed + ');\n';
    return code;
  };
  Blockly.JavaScript['nano_motor_forward'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(1,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['nano_motor_backward'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(2,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };
  Blockly.JavaScript['nano_motor_forward2'] = function(block) {
    var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor(1,1,' + value_speed1 + ');\t';
    code += 'motor(2,1,' + value_speed2 + ');\n';
    return code;
  };

  Blockly.JavaScript['nano_motor_backward2'] = function(block) {
    var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor(1,2,' + value_speed1 + ');\t';
    code += 'motor(2,2,' + value_speed2 + ');\n';
    return code;
  };

  Blockly.JavaScript['nano_motor_turn_left'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(3,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['nano_motor_turn_right'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(4,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['nano_motor_spin_left'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(5,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };

  Blockly.JavaScript['nano_motor_spin_right'] = function(block) {
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = '';
    code += 'motor_action(6,' + value_speed + ',' + value_speed + ');\t';
    return code;
  };
  Blockly.JavaScript['nano_motor_stop'] = function(block) {  
    var code = 'ao();\n';
    return code;
  };

  Blockly.JavaScript['nano_motor_stop_ch'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    if(dropdown_ch == 1){
      var code = 'motor(1, 1, 0);\n';
    }
    else if(dropdown_ch == 2){
      var code = 'motor(2, 1, 0);\n';
    }
     else if(dropdown_ch == 3){
      var code = 'motor(1, 1, 0);\n';
       code += 'motor(2, 1, 0);\n';
    }
    return code;
  };
  Blockly.JavaScript['button_1_status'] = function(block) {  
    var code = '(digitalRead(12))';  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
   Blockly.JavaScript['sw1_press'] = function(block) {  
    var code = 'SW1_press();\n';  
    return code;
  };
  Blockly.JavaScript['nano_beep'] = function(block) {  
    var dropdown_ch = block.getFieldValue('ch');
    if(dropdown_ch == 1){
      var code = 'digitalWrite(13,1);\n';
    }
    else if(dropdown_ch == 2){
      var code = 'digitalWrite(13,0);\n';
    }
     else if(dropdown_ch == 3){
      var code = 'beep();\n';
    }
    return code;
  };
  Blockly.JavaScript['display_status'] = function(block) {  
    var dropdown_status = block.getFieldValue('ch');
    if(dropdown_status == 1){
      var code = "display.display();\n";
    }
    else if(dropdown_ch == 2){
      var code = "display.clearDisplay();\n";
    }
    return code;
  };

}




