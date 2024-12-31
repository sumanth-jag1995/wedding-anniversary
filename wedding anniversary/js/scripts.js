// Add your JavaScript here (optional)
console.log("Wedding anniversary page loaded.");

// Hearts effect on hero banner
document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts-container');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 5 + 's'; // Varying duration
        heart.style.width = heart.style.height = Math.random() * 20 + 10 + 'px'; // Varying size
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000); // Match with max animation duration
    }, 200); // Increase heart frequency
});

// Handwriting
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('handwrittenText');

    function updateText(newText) {
        textElement.innerHTML = '';
        let index = 0;

        function type() {
            if (index < newText.length) {
                if (newText.charAt(index) === '\n') {
                    textElement.innerHTML += '<br>';
                } else {
                    textElement.innerHTML += newText.charAt(index);
                }
                index++;
                setTimeout(type, 120); // Adjust typing speed here
            }
        }

        type();
    }

    const newText = `Dear Wifey
    I was just a stone, barely alive
    all grey
    without a beating heart
    A moonkissed butterfly magically flew into my life
    adding colours, vigor, breath and life
    whatever she touched.
    With you, I know beauty
    With you, I know grace
    With you, I know life
    With you, I know love
    With you, I know the world.
    Thank you for coming into my life darling!!!
    I love you with all my heart and soul
    Happy Anniversary Baby!!!!!
    Your Loving Husband`;
    updateText(newText); // Call this function with your desired text
});
