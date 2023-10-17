//elements
const colorShowEl = document.getElementById('color-show')
const colorHexEl = document.getElementById('color-hex')

//get color scheme from url
function getColor(){
    fetch("https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showSchema(data)
    })
}
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

getColor()