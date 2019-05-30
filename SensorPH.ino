import serial, time
arduino=serial.Serial('CMO4',9600)#CMO4 es el canal donde esta conectado el arduino
time.sleep(2)
rawString=arduino.readline()
print(rawString)
arduino.close()

