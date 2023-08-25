backgroundColor = localStorage.getItem("backgroundColor") ? localStorage.getItem("backgroundColor") : localStorage.setItem("backgroundColor", "#000")
detailColor = localStorage.getItem("detailColor") ? localStorage.getItem("detailColor") : localStorage.setItem("detailColor", "#fff")
fontColor = localStorage.getItem("fontColor") ? localStorage.getItem("fontColor") : localStorage.setItem("fontColor", "#fff")

async function onLoad() {
    document.documentElement.style.setProperty('--body-bg', backgroundColor);
    document.documentElement.style.setProperty('--detail-color', detailColor);
    document.documentElement.style.setProperty('--font-color', fontColor);
}

function turnMode(detail, background, font) {
    localStorage.setItem("backgroundColor", background)
    localStorage.setItem("detailColor", detail)
    localStorage.setItem("fontColor", font)
    document.documentElement.style.setProperty('--body-bg', background);
    document.documentElement.style.setProperty('--detail-color', detail);
    document.documentElement.style.setProperty('--font-color', font);
}
