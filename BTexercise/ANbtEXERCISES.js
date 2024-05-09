//Alternate Nostril Breathing Exercises
document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.querySelector('.breathing-count');
    const progressBar = document.getElementById('myProgressBar');
    const startButton = document.getElementById('StBTanxiety');
    let progress = 0;
    let loopCount = 0;
    let intervalId;

    function updateProgressBar() {
        progress += 1;
        progressBar.style.width = `${(progress %5/ 5) * 100}%`;
        progressBar.textContent = `${progress %5||5}:5`;

        if (progress >= 300) {
            loopCount += 1;
            //clearInterval(intervalId); // Stop the interval when progress reaches 4
         if (loopCount) {
            clearInterval(intervalId);//Stop the interval when progress reaches 4 time loops
            progress = 0;
            loopCount = 0;
            // Enable the button once progress bar stops
            countElement.style.display = 'block'; // Show the element
            startButton.removeAttribute('disabled');
        } else {
            progress = 0;
            progressBar.style.width = '0';
            progressBar.textContent = '0:5';
        }
    }
}
    startButton.addEventListener('click', function() {
        countElement.style.display = 'none'; // Hides the element
        progress = 0;
        progressBar.style.width = '0';
        progressBar.textContent = '0:5';
        loopCount = 0;
        // Disable the button when the button is pressed
        startButton.setAttribute('disabled', true);
        // Start the progress when the button is pressed
        intervalId = setInterval(updateProgressBar, 1000); // Update every second (1000 milliseconds)
    });
});