// function for loading bar
function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    const loadingText = document.querySelector('.loading-text');
    progressBar.style.width = percentage + '%';
    
    // Add and remove the 'bounce' class to trigger the animation
    loadingText.classList.add('bounce');
    setTimeout(() => {
        loadingText.classList.remove('bounce');
    }, 1000); // Adjust the duration to match your animation duration
}

// Simulate a loading process (update the percentage accordingly)
let percentage = 0;
const progressBarInterval = setInterval(() => {
    percentage += 1; // Simulate progress
    if (percentage <= 100) {
        updateProgressBar(percentage);
    } else {
        clearInterval(progressBarInterval);
    }
}, 50); // Adjust the interval for the desired animation speed

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TYPEWRITER SCRIPT
