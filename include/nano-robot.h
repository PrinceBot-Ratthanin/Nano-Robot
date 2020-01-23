

#include "Servo.h"
#define _servo1 11
#define _servo2 6
#define _servo3 5
#define _servo4 4
#ifndef ALL
#define ALL 100
#endif
Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
void beep(){
  pinMode(13,OUTPUT);
  digitalWrite(13,HIGH);
  delay(200);
  digitalWrite(13,LOW);
}
void servo(uint8_t servo, int16_t angle)
{
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  if (servo == 3)
  {
    if (angle == -1)
    {
      servo3.detach();
    }
    else
    {
      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);
    }
  }
  if (servo == 4)
  {
    if (angle == -1)
    {
      servo4.detach();
    }
    else
    {
      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
}
void motor(int pin,int _direction, int _Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  if (pin == 1) {
    _SpeedsA = abs(_Speeds);
    _SpeedsA = _SpeedsA * 2.55;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (_direction == 1) {
      analogWrite(6, 255 - abs(_SpeedsA));
      analogWrite(5, 255);
    }
    else if (_direction ==2 ) {
      analogWrite(6, 255);
      analogWrite(5, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 2) {
    _SpeedsB = abs(_Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (_direction == 1) {
      analogWrite(9, 255 - abs(_SpeedsB));
      analogWrite(10, 255);
    }
    else if (_direction == 2) {
      analogWrite(9, 255);
      analogWrite(10, 255 - abs(_SpeedsB));
    }
  }
}
void motor_action(int action,int speedA,int speedB){
  switch(action){
    
    case 1:{                  //forward
        motor(1, 1,speedA);
        motor(2, 1,speedB);
      }
      break;
    case 2:{                  //backward
        motor(1, 2,speedA);
        motor(2, 2,speedB);
      }
      break;
    case 3:{                  //TL
        motor(1, 2,0);
        motor(2, 2,speedB);
      }
      break;
    case 4:{                  //TR
        motor(1, 2,speedA);
        motor(2, 2,0);
      }
      break;
    case 5:{                  //SL
        motor(1, 2,speedA);
        motor(2, 1,speedB);
      }
      break;
    case 6:{                  //SR
        motor(1, 1,speedA);
        motor(2, 2,speedB);
      }
      break;
    
  }
}