function turnMode(detail, background, font) {
    document.documentElement.style.setProperty('--body-bg', background);
    document.documentElement.style.setProperty('--detail-color', detail);
    document.documentElement.style.setProperty('--font-color', font);
}