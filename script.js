let isToggled = false;

function toggle() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (!isToggled) {
        container.style.backgroundColor = '#ff6b6b';
        text.textContent = 'Toggled Text';
        button.textContent = 'Reset';
    } else {
        container.style.backgroundColor = '#1dd1a1';
        text.textContent = 'Initial Text';
        button.textContent = 'Press Me';
    }

    isToggled = !isToggled;
}
