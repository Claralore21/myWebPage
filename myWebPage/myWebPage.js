/* App con botones*/

/*  Se ha intentado la importación de la clase
import {Text} from "./class.js";*/

class Text{
    constructor(name, year, advantages, challenges){
        this.name = name;
        this.year = year;
        this.advantages = advantages;
        this.challenges = challenges;
    }
}


let buttons = ["What is it?", "Year of origin", "Which advantages does it have?", "Is it beign implemented in Europe?"];
let bim = new Text("Methodology for the digitalization of the construction industry", 1950, ["a","b","c"], false);
let ar = new Text("Process in which buildings are materialized", 1920, ["a","b","c"], false);
let programming =  new Text("Discipline to create programs that helps human beigns and machines", 1930, ["a","b","c"], true);
let ai =  new Text("Technology that drives the evolution of machines", 1910, ["a","b","c"], true);


function changeText(concept) {

    document.getElementById("div1").innerHTML = "";
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
                x[count].setAttribute("onclick","displayInfo("+ count + ", '" + concept.name +"')");  
                break;
            case 1:
                x[count].setAttribute("onclick","displayInfo("+ count + ", " + concept.year +")");
                break;
            case 2:
                x[count].setAttribute("onclick","displayInfo(" + count + ", '" + concept.advantages +"')");
                break;
            case 3:
                x[count].setAttribute("onclick","displayInfo("+ count + ", " + concept.challenges +")");
                break;
        }
        count+=1;    
    }
    
}    
   
 
function displayInfo(buttonNumber, element){
    if (buttonNumber == 0 || buttonNumber == 1) {
        document.getElementById('button' + buttonNumber).innerHTML =  element;
    }
    else if (buttonNumber == 2){
        let contentInfo = element.split(",");
        document.getElementById('button2').innerHTML = "";
       for (let i = 0; i < contentInfo.length; i++) {
            document.getElementById('button' + buttonNumber).innerHTML += contentInfo[i] + '<br>';
        }
    }
    else if (element){
            document.getElementById('button3').innerHTML = 'YES';
        }
    else{
            document.getElementById('button3').innerHTML = 'NO';
        }
    }


