// Pursed Lip Breathing Exercises
document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.querySelector('.breathing-count');
    const progressBar = document.getElementById('myProgressBar');
    const startButton = document.getElementById('StBTanxiety');
    let progress = 0;
    let loopCount = 0;
    let intervalId;

    function updateProgressBar() {
        if (progress % 6 === 0) {
            progressBar.style.width = '0%';
            progressBar.textContent = '2:2';
        } else if (progress % 6 <= 1) {
            progressBar.style.width = `${(progress % 2 / 2) * 100}%`;
            progressBar.textContent = `${progress % 2 || 2}:2`;
        } else if (progress % 6 <= 6) {
            progressBar.style.width = `${((progress - 2) % 4 / 4) * 100}%`;
            progressBar.textContent = `${(progress - 2) % 4 || 4}:4`;
        } 
    }

    function incrementProgress() {
        progress += 1;
        updateProgressBar();
        if (progress >= 6) {
            loopCount += 1;
            if (loopCount === 4) {
                clearInterval(intervalId);
                loopCount = 0;
                countElement.style.display = 'block'; // Show the element
                startButton.removeAttribute('disabled');
            }
            progress = 0;  // Reset progress after each loop
        }
    }    
            
    
    startButton.addEventListener('click', function() {
        countElement.style.display = 'none'; // Hides the element
        progress = 0;
        updateProgressBar();
        loopCount = 0;
        // Disable the button when the button is pressed
        startButton.setAttribute('disabled', true);
        // Start the progress when the button is pressed
        intervalId = setInterval(incrementProgress, 1000); // Update every second (1000 milliseconds)
    });
});