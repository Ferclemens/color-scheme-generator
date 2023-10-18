//elements
const colorShowEl = document.getElementById('color-show')
const colorHexEl = document.getElementById('color-hex')
const colorInputEl = document.getElementById('color-input')
const selectBtnEl = document.getElementById('select-btn')

//Listeners
selectBtnEl.addEventListener('click', function(){
    getColorScheme(selectColor())
})

//get color scheme from url
function getColorScheme(hex = '0047AB'){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=analogic&count=6`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        showSchema(data)
    })
}
//show color-scheme and hex code in UI
function showSchema(colorData) {
    let colorBox = ''
    let colorHex = ''
    colorData.colors.map((color) => {
        colorHex += `<p>${color.hex.value}</p>`

        colorBox += `
            <div style="background-color:${color.hex.value}" class="color-box">
            </div>
        `
    })
    
    //console.log(colorBox);
    colorShowEl.innerHTML = colorBox
    colorHexEl.innerHTML = colorHex
}

// get input color value (hex formated)
function selectColor() {
    const color = colorInputEl.value
    const formatColor = color.slice(1)
    console.log(formatColor);
    return formatColor
}

getColorScheme()