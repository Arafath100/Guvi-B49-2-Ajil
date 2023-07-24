document.addEventListener("DOMContentLoaded", function () {
    countdown(10, function () {
        displayMessage("Happy Independence Day");
    });
});

function countdown(seconds, callback) {
    if (seconds > 0) {
        displayCountdown(seconds, function () {
            countdown(seconds - 1, callback);
        });
    } else {
        callback();
    }
}

function displayCountdown(value, callback) {
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.innerHTML = value;
    setTimeout(callback, 1000);
}

function displayMessage(message) {
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.innerHTML = message;
}

