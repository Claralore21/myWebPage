/* App sobre clasificación de animales */
class Animal{
    constructor(name, maxAge, isVertebrate, info){
        this.name = name;
        this.info = info;
        this.maxAge = maxAge;
        this.isVertebrate = isVertebrate;
    }
}

let buttons = ["¿Cuál es su nombre?", "¿A qué edad llega?", "¿Vertebrado o invertebrado?", "Tipo de animal, alimentación y domesticidad"];
let cow = new Animal("Vaca", 50, true, ["Mamífero", "Hervíboro", "Doméstico"]);
let lion = new Animal("Leon", 20, false, ["Mamífero", "Carnívoro", "Salvaje"]);
let cocodrile =  new Animal("Cocodrilo", 30, true, ["Reptil", "Carnívoro", "Salvaje"]);
let chicken =  new Animal("Gallina", 10, true, ["Ave", "Omnívoro", "Doméstico"]);

    
function changeAnimal(animal) {
    document.getElementById("div1").innerHTML = "myWebPage.html";
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById("div1").innerHTML += "<button class='infoButton' id='button" + i + "'>" +buttons[i]+"</button>"; 
    }
    document.getElementById("div1").setAttribute("style","display:flex; justify-content: space-around");
    var x = document.getElementsByClassName("infoButton");
    console.log(x);

    var count = 0;
    while(count < buttons.length){
        switch (count) {
            case 0: 
            x[count].setAttribute("onclick","displayInfo("+ count + ", '" + animal.name +"')");  
                break;
            case 1: x[count].setAttribute("onclick","displayInfo("+ count + ", " + animal.maxAge +")");
                break;
            case 2:
                x[count].setAttribute("onclick","displayInfo(" + count + ", " + animal.isVertebrate +")");
                break;
            case 3:
                x[count].setAttribute("onclick","displayInfo("+ count + ", '" + animal.info +"')");
                break;
        }
        count+=1;    
    }
    
}    
   

function displayInfo(buttonNumber, element){
    if (buttonNumber == 0 || buttonNumber == 1) {
        document.getElementById('button' + buttonNumber).innerHTML = element;
    }
    else if (buttonNumber == 3){
        let animalInfo = element.split(",");
        document.getElementById('button3').innerHTML = "";
        for (let i = 0; i < animalInfo.length; i++) {
            document.getElementById('button3').innerHTML += animalInfo[i] + '<br>';
        }
    }
    else if (element){
        document.getElementById('button' + buttonNumber).innerHTML = 'Es un animal vertebrado';
    }
    else{
        document.getElementById('button' + buttonNumber).innerHTML = 'Es un animal invertebrado';
    }
    
}