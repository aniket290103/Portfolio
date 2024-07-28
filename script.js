function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const textElement = document.getElementById('text');
const text = "FULLSTACK DEVELOPER! ";
let index = 0;
let typingSpeed = 100; // Adjust typing speed here
let delayBeforeRepeat = 400; // Delay before restarting the typing effect

function type() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(() => {
            textElement.textContent = ""; // Clear text
            index = 0; // Reset index
            type(); // Restart typing
        }, delayBeforeRepeat);
    }
}

// Start typing effect
type();
