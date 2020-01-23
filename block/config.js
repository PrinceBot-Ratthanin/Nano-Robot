const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
    blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
    {
      name: "Basic",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/robot.png`,
      blocks: [
        
        //"i2c128x64_display_clear",
        //"i2c128x64_display_display",
        "display_status",
        {
          xml:
            `<block type="i2c128x64_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="size">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
        },
        "basic_string",
        "button_1_status",
        "sw1_press",
        "nano_beep",
        {
          xml:
            `<block type="nano_servo">
                <value name="angle">
                    <shadow type="math_number">
                         <field name="NUM">90</field>
                    </shadow>
                </value>
            </block>`
        },
        //'nano_motor_stop',
        'nano_motor_stop_ch',
        /*{
            xml : 
            `<block type="nano_motor_stop_ch">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },*/
        {
          xml:
            `<block type="nano_Motor">
                <value name="speed">
                    <shadow type="math_number">
                         <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="nano_motor_forward2">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="nano_motor_backward2">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        /*{
            xml : 
            `<block type="nano_motor_spin_left">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="nano_motor_spin_right">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="nano_motor_turn_left">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },
        {
            xml : 
            `<block type="nano_motor_turn_right">
                <value name="speed">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
        },*/
                
      ]
    },
    ]
};