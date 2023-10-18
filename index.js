//elements
const colorShowEl = document.getElementById('color-show')
const colorHexEl = document.getElementById('color-hex')
const colorInputEl = document.getElementById('color-input')
const selectBtnEl = document.getElementById('select-btn')
const selectSchemeEl = document.getElementById('select-scheme')

//Listeners
selectBtnEl.addEventListener('click', function(){
    getColorScheme(selectColor(), selectMode())
    selectSchemeEl.value = selectMode()
})

//get color scheme from url
function getColorScheme(hex = '0047AB', mode = 'analogic'){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=6`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showSchema(data)
        
    })
}
//render color-scheme and hex code in UI
function showSchema(colorData) {
    let colorBox = ''
    let colorHex = ''
    let colorSchemeOption = ''

    colorData.colors.map((color) => {
        colorHex += `<p>${color.hex.value}</p>`
        colorBox += `
            <div style="background-color:${color.hex.value}" class="color-box">
            </div>
        `
    })
    //get keys and values for scheme options
    const schemeKeys = Object.keys(colorData._links.schemes)
    //const schemeValues = Object.values(colorData._links.schemes)
    //console.log(schemeKeys);
    //console.log(schemeValues);
    
    //render options input
    schemeKeys.map((key) => {
        colorSchemeOption += `<option value=${key}>${key}</option>`
    })
    
    colorShowEl.innerHTML = colorBox
    colorHexEl.innerHTML = colorHex
    selectSchemeEl.innerHTML = colorSchemeOption
}

// get input color value (hex formated)
function selectColor() {
    const color = colorInputEl.value
    const formatColor = color.slice(1)
    //console.log(formatColor);
    return formatColor
}
// get scheme mode from option input
function selectMode() {
    const mode = selectSchemeEl.value
    //console.log(mode);
    return mode
}
getColorScheme()