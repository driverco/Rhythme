#include "Keyboard.h"
#define LEDPIN 13 // status LED pin
#define PIEZOTHRESHOLD 300 // analog threshold for piezo sensing
#define PADNUM 4 // number of pads
#define MILLISDIFF 100 // diff time between reads

int val;
int valMax[4] = {0,0,0,0};
int millisPads[4] = {0,0,0,0};
void setup() {
  pinMode(LEDPIN, OUTPUT);
  Serial.begin(57600); // set serial output rate
  Serial.println("Driverco Multipad");
  Keyboard.begin();
}
void loop() {
  // Loop through each piezo and send data
  // on the serial output if the force exceeds
  // the piezo threshold
  for(int i = 0; i < PADNUM; i++) {
    val = analogRead(i);
    if( val >= PIEZOTHRESHOLD ) {
      if(millisPads[i]+MILLISDIFF<millis()){
        digitalWrite(LEDPIN,HIGH); 
        Serial.println(String(i)+","+String(val));
        digitalWrite(LEDPIN,LOW);
        switch (i) {
          case 0:
                Keyboard.press('Q');
            break;
          case 1:
                Keyboard.press('R');
            break;
          case 2:
                Keyboard.press('U');
            break;
          case 3:
                Keyboard.press('P');
            break;
          default:
                Keyboard.press('A');
            break;
        }
        millisPads[i]= millis();
        Keyboard.releaseAll();
      }
    }
  }
}
