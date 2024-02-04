const draggable = document.getElementById('draggable');

let offsetX, offsetY, isDragging = false;

function startDrag(e) {
    isDragging = true;
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

    offsetX = clientX - draggable.getBoundingClientRect().left;
    offsetY = clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing';
}

function endDrag() {
    isDragging = false;
    draggable.style.cursor = 'grab';
}

function performDrag(e) {
    if (!isDragging) return;

    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

    let x = clientX - offsetX;
    let y = clientY - offsetY;

    // Boundary checks
    x = Math.max(0, x);
    y = Math.max(0, y);
    x = Math.min(window.innerWidth - draggable.offsetWidth, x);
    y = Math.min(window.innerHeight - draggable.offsetHeight, y);

    draggable.style.left = x + 'px';
    draggable.style.top = y + 'px';
}

// Mouse events
draggable.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', performDrag);

// Touch events
draggable.addEventListener('touchstart', startDrag);
document.addEventListener('touchend', endDrag);
document.addEventListener('touchmove', performDrag);




/* const draggable = document.getElementById('draggable');

let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Boundary checks for left and top
    x = Math.max(0, x);
    y = Math.max(0, y);

    // Boundary checks for right and bottom
    x = Math.min(window.innerWidth - draggable.offsetWidth, x);
    y = Math.min(window.innerHeight - draggable.offsetHeight, y);

    draggable.style.left = x + 'px';
    draggable.style.top = y + 'px';
}); */