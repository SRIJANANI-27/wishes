// Set the date we're counting down to
const countDownDate = new Date("sep 11, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // Check if the count down is over (i.e., it's September 11th)
    if (distance <= 0) {
        clearInterval(countdownFunction); // Stop the countdown
        
        // Hide the countdown display
        document.getElementById("countdown").style.display = "none";
        
        // Show the birthday message and update its text
        document.getElementById("birthday-message").classList.remove("hidden");
        document.getElementById("birthday-text").innerText = "Happy Birthday !🎉💞";
    }
}, 1000);



// Generate hearts
function generateHearts() {
    const body = document.querySelector('body');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        body.appendChild(heart);
    }
    for (let i = 0; i < 50; i++) {
        const heart2 = document.createElement('div');
        heart2.className = 'heart2';
        heart2.style.left = `${Math.random() * 100}vw`;
        heart2.style.animationDuration = `${Math.random() * 5 + 10}s`;
        body.appendChild(heart2);
    }
}

generateHearts();
