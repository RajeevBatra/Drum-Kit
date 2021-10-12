document.onkeypress = function (event) {
  const keyPressed = event.key.toLowerCase();

  switch (keyPressed) {
    case "e":
      console.log(keyPressed);
      var audioCrash = new Audio("audio/crash.wav");
      audioCrash.play();
      break;
    case "r":
      console.log(keyPressed);
      var audioRide = new Audio("audio/ride.wav");
      audioRide.play();
      break;
    case "i":
      console.log(keyPressed);
      var audioOpen = new Audio("audio/hihat-open.wav");
      audioOpen.play();
      break;
    case "k":
      console.log(keyPressed);
      var audioClose = new Audio("audio/hihat-close.wav");
      audioClose.play();
      break;
    case "f":
      console.log(keyPressed);
      var audioLow = new Audio("audio/tom-low.wav");
      audioLow.play();
      break;
    case "g":
      console.log(keyPressed);
      var audioMid = new Audio("audio/tom-mid.wav");
      audioMid.play();
      break;
    case "h":
      console.log(keyPressed);
      var audioHigh = new Audio("audio/tom-high.wav");
      audioHigh.play();
      break;
    case "j":
      console.log(keyPressed);
      var audioSnare = new Audio("audio/snare.wav");
      audioSnare.play();
      break;
    case "v":
      console.log(keyPressed);
      var audioKick = new Audio("audio/kick.wav");
      audioKick.play();
      break;
    case "b":
      console.log(keyPressed);
      var audioKick2 = new Audio("audio/kick.wav");
      audioKick2.play();
      break;

    default:
      break;
  }
};
