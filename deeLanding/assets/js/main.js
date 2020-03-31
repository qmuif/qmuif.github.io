function createHoverImage() {
    document.querySelectorAll('[data-hover-src]').forEach((img) => {
        const src = img.getAttribute('src');
        const srcH = img.getAttribute('data-hover-src');

        img.addEventListener('mouseover', () => {
            img.src = srcH;
        })
        img.addEventListener('mouseout', () => {
            img.src = src;
        })
    });
}

createHoverImage();