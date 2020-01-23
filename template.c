#include <Arduino.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "nano-robot.h"

typedef int Number;
typedef int Boolean;

${EXTINC}
Adafruit_SSD1306 display(128, 32, &Wire, 4);


${VARIABLE}

${FUNCTION}

void SW1_press(){
	pinMode(12,INPUT);
	pinMode(13,OUTPUT);
	display.clearDisplay();
    display.setTextSize(2);
    display.setCursor(0,10);
    display.println("Nano-Robot");
    display.display();
    delay(600);
  while(digitalRead(12) == 1){
  	display.clearDisplay();
    display.setTextSize(1.5);
    display.setCursor(0,0);display.println("A0:");
    display.setCursor(20,0);display.println(analogRead(A0));
    display.setCursor(60,0);display.println("A1:");
    display.setCursor(80,0);display.println(analogRead(A1));

    display.setCursor(0,10);display.println("A2:");
    display.setCursor(20,10);display.println(analogRead(A2));
    display.setCursor(60,10);display.println("A3:");
    display.setCursor(80,10);display.println(analogRead(A3));

    display.setCursor(0,20);display.println("A6:");
    display.setCursor(20,20);display.println(analogRead(A6));
    display.setCursor(60,20);display.println("A7:");
    display.setCursor(80,20);display.println(analogRead(A7));
    display.display();
    delay(50);
  }
  display.clearDisplay();
  display.display();
  digitalWrite(13,1);
  delay(200);
  digitalWrite(13,0);
  
}
void setup()
{
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.clearDisplay();
  pinMode(5,OUTPUT);
  pinMode(6,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(13,OUTPUT);
  pinMode(12,INPUT);
  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}