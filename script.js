let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function updateTimeDisplay() {
    timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function startStopwatch() {
    timer = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        updateTimeDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
    updateTimeDisplay();
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        startStopButton.textContent = 'Start';
    } else {
        startStopwatch();
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay();
    startStopButton.textContent = 'Start';
    isRunning = false;
});
