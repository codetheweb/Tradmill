# Tradmill
A new &amp; fresh wireless treadmill controller.  Made for Raspberry Pi.

###Setup
1. Install [Meteor](https://github.com/IGx89/meteor)
2. Install [Wiring Pi](https://projects.drogon.net/raspberry-pi/wiringpi/)
3. Clone this repo in your home directory
4. Do `sudo crontab -e`.  At the end of the file, add `@reboot cd /home/pi/tradmill/ && sudo MONGO_URL=http:// meteor -p 80`
5. Hookup GPIO pin [1](http://pi.gadgetoid.com/pinout) to your treadmill's PWM input
6. Reboot and have fun - goto your RasPi's IP address to control the treadmill
