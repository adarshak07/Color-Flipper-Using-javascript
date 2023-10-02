const colors = [{ name: "Aquamarine", hex: "#7FFFD4" },
{ name: "Coral", hex: "#FF7F50" },
{ name: "Lavender", hex: "#E6E6FA" },
{ name: "Magenta", hex: "#FF00FF" },
{ name: "Orchid", hex: "#DA70D6" },
{ name: "Periwinkle", hex: "#CCCCFF" },
{ name: "Plum", hex: "#DDA0DD" },
{ name: "SlateBlue", hex: "#6A5ACD" },
{ name: "Teal", hex: "#008080" },
{ name: "Turquoise", hex: "#40E0D0" },
{ name: "Azure", hex: "#F0FFFF" },
{ name: "Blush", hex: "#DE5D83" },
{ name: "Crimson", hex: "#DC143C" },
{ name: "Emerald", hex: "#50C878" },
{ name: "Gold", hex: "#FFD700" },
{ name: "Indigo", hex: "#4B0082" },
{ name: "Jade", hex: "#00A86B" },
{ name: "Lilac", hex: "#C8A2C8" },
{ name: "Marigold", hex: "#FFB347" },
{ name: "Navy", hex: "#000080" },
{ name: "Olive", hex: "#808000" },
{ name: "Peach", hex: "#FFE5B4" },
{ name: "Rose", hex: "#FF007F" },
{ name: "Saffron", hex: "#F4C430" },
{ name: "Topaz", hex: "#FFC87C" },
{ name: "Violet", hex: "#EE82EE" },
{ name: "Amethyst", hex: "#9966CC" },
{ name: "Burgundy", hex: "#800020" },
{ name: "Cerulean", hex: "#007BA7" },
{ name: "Dandelion", hex: "#F0E130" },
{ name: "Fuchsia", hex: "#FF00FF" },
{ name: "Garnet", hex: "#733635" },
{ name: "Hazel", hex: "#8E7618" },
{ name: "Ivory", hex: "#FFFFF0" },
{ name: "Jasmine", hex: "#F8DE7E" },
{ name: "Kiwi", hex: "#8EE53F" },
{ name: "Lemon", hex: "#FFF700" },
{ name: "Mint", hex: "#3EB489" },
{ name: "Nectarine", hex: "#FFA07A" },
{ name: "Opal", hex: "#A8C3BC" },
{ name: "Pansy", hex: "#78184A" },
{ name: "Quartz", hex: "#51484F" },
{ name: "Ruby", hex:"#E0115F"},
{ name:"Sapphire",hex:"#0F52BA"},
{name:"Tangerine",hex:"#FFA07A"},
{name:"Umber",hex:"#635147"},
{name:"Vanilla",hex:"#F3E5AB"},
{name:"Willow",hex:"#C9DC87"},
{name:"Xanadu",hex:"#738678"},
{name:"Yellow",hex:"#FFFF00"},
{name:"Zinnia",hex:"#DC9D00"}
];

const button = document.querySelector("#btn")

const currentBgColorName = document.querySelector(".color")

button.addEventListener('click',function() {
    //we want random no form 0 to 49 only , feel index 
    const randomNo = Math.floor(Math.random() * colors.length) //*  karne se range mila jata hai 
    //floor se whole no. converted .
    console.log(randomNo);

    document.body.style.backgroundColor =  colors[randomNo].hex

    currentBgColorName.innerText = colors[randomNo].name
    //.innerText , textContent also works here ,, as well ad inerHTML as well
})