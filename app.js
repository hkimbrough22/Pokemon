console.log('Hello World!');
function getUsername (){
    let userName = prompt('Please enter your name');
    document.write("Hello " + userName + ", ");
}
getUsername();

function getPMpref(){
    let likePM = prompt("Do you like Pokemon?");
    if(likePM == "yes"){
        alert("I like Pokemon too!");
    }
    else (alert("I'm sorry to hear that! Maybe try Digimon, you square!"));
}
getPMpref();
function getTOD (){
    let day = new Date ();
    let time = day.getHours ();
    console.log(time);
    if (time <= 10){
        return " Good Morning! Welcome!";
    } else if (time >10 && time < 14){
        return " Good Afternoon! Welcome!";
    } else {
        return " Good Evening! Welcome!";
    }
}
let element = getTOD();
document.write(element);

