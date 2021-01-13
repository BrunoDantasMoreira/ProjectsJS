const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyPriority(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--color-panel"),
    bgHeadings: getStyle(html, "--color-headings"),
    bgText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    bgHeadings: "#3664ff",
    bgText: "#b5b5b5",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})