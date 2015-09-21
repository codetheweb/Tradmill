import wiringpi2 as wiringpi
import time
from time import sleep
import datetime
import sys

wiringpi.wiringPiSetup()
wiringpi.pullUpDnControl(16, 1) # Setup sensor input
wiringpi.pinMode(1, 3)

# Function for getting the current speed
def getSpeed():
  currentTime = int(time.time())
  currentTime = currentTime + 2
  nextTime = -1
  r = 0
  
  while currentTime != nextTime:
    if wiringpi.digitalRead(16):
      off = False
      while off == False:
        if wiringpi.digitalRead(16) == False:
          off = True
      if off == True:
        r = r + 1
  
    nextTime = int(time.time())
  r = r/4
  distance = (r * (6.25 / 2)) / 63360 # (rotations * circumference) / inches in a mile
  speed = distance * 3600
  return speed


# Main part of the program
targetSpeed = float(sys.argv[1])
print(targetSpeed)

if (targetSpeed >= 2):
  currentValue = int(12 * targetSpeed)
else:
  currentValue = 20

while True:
  action = False;
  wiringpi.pwmWrite(1, currentValue)
  
  currentSpeed = getSpeed()
  print(currentSpeed)
  if (currentSpeed < targetSpeed):
    difference = targetSpeed - currentSpeed
    if (difference > 3):
      currentValue = currentValue + 10
    elif (difference > 2):
      currentValue = currentValue + 7
    elif (difference > 1):
     currentValue = currentValue + 2
    else:
      currentValue = currentValue + 1
  elif (currentSpeed > targetSpeed):
    difference = currentSpeed - targetSpeed
    if (difference > 3):
      currentValue = currentValue - 10
    elif (difference > 2):
      currentValue = currentValue - 7
    elif (difference > 1):
     currentValue = currentValue - 2
    else:
      currentValue = currentValue - 1