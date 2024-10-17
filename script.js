function updateClock() {
    const clock = document.getElementById('clock');
    const time = new Date();
    clock.textContent = time.toLocaleTimeString('en-US', { hour12: false });
}

setInterval(updateClock, 1000);
updateClock(); // Call it immediately
