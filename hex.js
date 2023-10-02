const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//hex color code is always of the form - #_ _ _ _ _ _ , first 2 diits amount of red , then green etc.
//eg #123456 , #afdbec , #5ad63f , a to f only charaterd note .. 

const button = document.getElementById("btn")

const currentColorName = document.querySelector(".color")


button.addEventListener('click', function() {
    let hexColor = '#'; //we have to form this hexColor var . 
    

    for(let i=0;i<6;i++) {
        const randomNumber = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomNumber]
    }
    document.body.style.backgroundColor = hexColor
    currentColorName.innerText = hexColor
})