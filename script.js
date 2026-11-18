// PROJECTS PAGE
if (document.querySelector('#firstLogos')) {
    const previousLogos = document.querySelector('#previousLogos');
    const nextLogos = document.querySelector('#nextLogos');
    const firstLogos = document.querySelector('#firstLogos');
    const secondLogos = document.querySelector('#secondLogos');

    // Switch between the two logo pages.
    function changeLogos() {
        if (firstLogos.style.display === 'none') {
            firstLogos.style.display = 'grid';
            secondLogos.style.display = 'none';
        } else {
            firstLogos.style.display = 'none';
            secondLogos.style.display = 'grid';
        }
    }

    previousLogos.addEventListener('click', changeLogos);
    nextLogos.addEventListener('click', changeLogos);

    // Illustration Show All / Show Less button.
    const moreDrawings = document.querySelector('#moreDrawings');
    const showDrawings = document.querySelector('#showDrawings');
    const showText = document.querySelector('#showText');
    const showArrow = document.querySelector('#showArrow');

    showDrawings.addEventListener('click', () => {
        if (moreDrawings.style.display === 'none') {
            moreDrawings.style.display = 'grid';
            showText.textContent = 'Show Less';
            showArrow.className = 'fa-solid fa-chevron-up';
            showDrawings.setAttribute('aria-expanded', 'true');
        } else {
            moreDrawings.style.display = 'none';
            showText.textContent = 'Show All';
            showArrow.className = 'fa-solid fa-chevron-down';
            showDrawings.setAttribute('aria-expanded', 'false');
        }
    });
}

// CONTACTS PAGE
if (document.querySelector('#contactForm')) {
    const sendButton = document.querySelector('#sendButton');
    const clearButton = document.querySelector('#clearButton');
    const messageStatus = document.querySelector('#messageStatus');

    sendButton.addEventListener('click', () => {
        messageStatus.style.display = 'block';
        messageStatus.textContent = 'Message sent!';
    });

    clearButton.addEventListener('click', () => {
        messageStatus.style.display = 'none';
        messageStatus.textContent = '';
    });
}