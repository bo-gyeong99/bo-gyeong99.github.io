const elements = document.querySelectorAll('.fade-up');

function checkPosition() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkPosition);
checkPosition();