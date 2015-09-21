function now() {
  var time = moment().format("h:mm");
  $(".time").html(time);
}

on = false;

Template.body.rendered = function() {
  setInterval(now, 1000);
  Meteor.call("start", 2);
  
  $(".dial").knob({
    "min": 0,
    "max": 6,
    "step": 0.5,
    "release": function(speed) {
      if (speed == 0) {
        Meteor.call("stop");
      }
      else {
       Meteor.call("start", speed);
      }
    }
  });
}

/*Template.body.events({
  'click .graphs': function() {
    $(".graphs").addClass("clicked");
    $(".today").removeClass("clicked");
    
    $(".today-container").css("display", "none");
    $(".graphs-container").css("display", "block");
  },
  
  'click .today': function() {
    $(".today").addClass("clicked");
    $(".graphs").removeClass("clicked");
    
    $(".graphs-container").css("display", "none");
    $(".today-container").css("display", "block");
  },
  
  'click .faster': function() {
    var currentSpeed = $(".rate").text();
    currentSpeed = parseFloat(currentSpeed);
    currentSpeed = currentSpeed + 0.25;
    $(".rate").text(currentSpeed);
    Meteor.call("start", currentSpeed);
  },
  
  'click .slower': function() {
    var currentSpeed = $(".rate").text();
    currentSpeed = parseFloat(currentSpeed);
    if (currentSpeed != 0.5) {
      currentSpeed = currentSpeed - 0.25;
      $(".rate").text(currentSpeed);
      Meteor.call("start", currentSpeed);
    }
  }
});*/