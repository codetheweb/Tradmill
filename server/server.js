var root = "/home/pi/treadmill/";

Meteor.startup(function () {
  Meteor.call("command", "sudo pkill python");
  Meteor.call("command", "sudo gpio mode 1 pwm");
  Meteor.call("stop");
});

Meteor.methods({
  'start': function(speed) {
    console.log("Start called");
    Meteor.call("command", "sudo pkill python");
    Meteor.call("command", "sudo python " + root + "move.py " + speed);
    return true;
  },
  
  'stop': function() {
    Meteor.call("command", "sudo pkill python");
    Meteor.call("command", "sudo gpio pwm 1 0");
    console.log("Stopped");
    return true;
  },
  
  'command': function(command) {      
    var exec = Npm.require('child_process').exec;
    var Fiber = Npm.require('fibers');
    
    exec(command, function (error, stdout, stderr) {
      
    });
  }
});