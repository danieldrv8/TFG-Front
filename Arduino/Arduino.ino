// C++ code
//

// Sensor distancia ultrasónica: SDU
// Sensor de fotoresistencia: LDR
// Pantalla LCD: LCD
// Sensor temperatura: TMP
#include <LiquidCrystal.h>
#include <DHT.h>

//Leds

const int redLedPin = 2;
const int greenLedPin = 3;
const int whiteLedPin = 11;

// SDU
const int echoPin = 12;
const int triggerPin = 13;
unsigned long current_time = 0;
unsigned long previus_time = 0;
const long interval = 200;

// LDR
const int ldrPin = A0;

//LCD
const int rs = 8, en = 9, d4 = 4, d5 = 5, d6 = 6, d7 = 7;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
String temperatureString = "";

// TMP

int temp = 0;

#define DHT11_PIN 10
#define DHTTYPE DHT11

DHT dht(DHT11_PIN, DHTTYPE); // Initialize DHT sensor for normal 16mhz Arduino

void setup()
{
  Serial.begin(9600);

  //LEDS
  pinMode(redLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  pinMode(whiteLedPin, OUTPUT);

  //SDU
  pinMode(echoPin, INPUT);
  pinMode(triggerPin, OUTPUT);

  // LDR
  pinMode(ldrPin, INPUT);

  // Comenzamos el sensor DHT
  dht.begin();

  // Inicializar el LCD con el número de columnas y filas del LCD
  lcd.begin(16, 2);

}

void loop()
{
  // Generar un pulso corto en el pin del trigger para activar la medición
  triggerPulse();

  int distance = measureDistance(); // Medir distancia
  // Encender la luz roja si se detecta un objeto a menos de 6 cm, de lo contrario, encender la luz verde
  digitalWrite(redLedPin, distance < 6);
  digitalWrite(greenLedPin, distance >= 6);

  // Controlar la intensidad del LED blanco en función de la luz ambiente
  int lightLevel = analogRead(ldrPin); // Leer el valor del sensor de luz
  int brightness = map(lightLevel, 0, 1023, 255, 0); // Mapear el valor leído a un rango de brillo (0-255)
  analogWrite(whiteLedPin, brightness); // Ajustar la intensidad del LED blanco


  // Leemos la temperatura en grados centígrados (por defecto)
  float t = dht.readTemperature();

 // Comprobamos si ha habido algún error en la lectura
  if (isnan(t)) {
    Serial.println("Error obteniendo los datos del sensor DHT11");
    return;
  }
 
  Serial.print("Temperatura: ");
  Serial.print(t);
  Serial.print(" *C ");

  lcd.clear();
  lcd.setCursor(0, 0);

  lcd.print("Tmp: ");
  lcd.print(t);
  lcd.print(" C");

  delay(100);
}



void triggerPulse() {
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
}

int measureDistance() {
  int d = 0;
  triggerPulse(); // Generar pulso
  long duration = pulseIn(echoPin, HIGH); // Medir la duración del eco
  d = duration * 0.034 / 2;
  Serial.print("Distancia:");
  Serial.print(d);
  Serial.println();
  return d; // Convertir la duración a distancia en cm
}
