/*
Arduino code used for the Ultrasonic Sensor Sunglasses

Jacob Gardner - 5th Grade STEM Engineering Project
*/

int trigPin = D4;  // These lines assign names to values
int echoPin = D3;  // so they can be easily identified.
int buzzer = D8;  // These are set before the code

/* This section of code below runs only one time.
 * It enables the serial monitor to see output and
 * sets the pins to input or output.
*/ 
void setup() {
  Serial.begin (9600); 
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);  
  pinMode(buzzer, OUTPUT);
}

/* The remaining part of the code runs in a constant loop.
 * It triggers the ultrasonic sensor and calculates the
 * time it took for the sound waves to return.  It converts
 * the time in milliseconds into distance in centimeters.
 */
void loop() { 
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
  Serial.print(distance);
    Serial.println(" cm");
  
// This part of the code below determines whether to
// beep depending on the distance detected. If the object
// is within 62 start the beeps.
  
if (distance > 30 and distance < 62) { 
    tone(buzzer,100,50);  // Intermitten beeps
    }
    if (distance > 0 and distance < 31) { 
    tone(buzzer,100); // Long solid beep
  }
  else {
    }
  delay (500);
  
} 
