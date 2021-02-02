import "../styles/stopwatch.css";
const Stopwatch = () => {
    function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }

    // Declare variables to use in our functions below
    

    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    // Create function to modify innerHTML

    function print(txt) {
    document.getElementById("display").innerHTML = txt;
    }

    // Create "start", "pause" and "reset" functions

    function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
    }

    function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
    }

    function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
    }

    // Create function to display buttons

    function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
    }
    // Create event listeners

    let playButton = document.getElementById("playButton");
    let pauseButton = document.getElementById("pauseButton");
    let resetButton = document.getElementById("resetButton");

    playButton.addEventListener("click", start);
    pauseButton.addEventListener("click", pause);
    resetButton.addEventListener("click", reset);

    return ( 
        <div className="stopwatch">
      <h1><span className="gold">RUNNING</span> STOPWATCH</h1>
      <div className="circle">
        <span className="time" id="display">00:00:00</span>
      </div>

      <div className="controls">
        <button className="buttonPlay">
          <img id="playButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/play-button_opkxmt.svg" alt="start" />

          <img id="pauseButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/pause-button_pinhpy.svg" alt="start" />
        </button>

        <button className="buttonReset">
          <img id="resetButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/reset-button_mdv6wf.svg" alt="start" />
        </button>
      </div>
    </div>
     );
}
 
export default Stopwatch;