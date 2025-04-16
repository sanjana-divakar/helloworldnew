document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const greeting = document.getElementById('greeting');
    
    greetButton.addEventListener('click', () => {
        greeting.textContent = 'Hi!';
    });
});
