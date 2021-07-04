function getTOD (){
    let day = new Date ();
    let time = day.getHours ();
    console.log(time);
    if (time <= 10){
        document.write(" Good Morning! Welcome!");
    } else if (time >10 && time < 14){
        document.write (" Good Afternoon! Welcome!");
    } else {
        document.write(" Good Evening! Welcome!");
    }
}

function getUsername (){
    let userName = prompt('Please enter your name');
    document.write("Hello " + userName + ", ");
}

function getPMpref(){
    let likePM = prompt("Please rate how much you love Pokemon out of 5 stars!");
    while(likePM < 0 || likePM > 5){
        likePM = prompt ("I'm sorry, please answer between 0 - 5.");
    }
    if (likePM == 3 || likePM == 4 || likePM == 5){
        alert("Awesome! We love Pokemon a lot too!");
        document.write (likePM + " stars for you!");
        document.write ("<br>");
    }
    else if(likePM == 0 || likePM ==2){
        alert ("I'm sorry to hear that! Maybe try Digimon, you square!")
        document.write ("Enjoy your " + likePM + " stars, square!")
        document.write ("<br>");
    }
    else if(likePM == 1){
        alert ("I'm sorry to hear that! Maybe try Digimon, you square!")
        document.write ("Enjoy your " + likePM + " star, square!")
        document.write ("<br>");
    }
    else{
        alert ("Welp, answer next time, I guess.")
        document.write ("Everyone come check out this person... they dont even like rating Pokemon.")
        document.write ("<br>");
        document.write ('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Star_red.svg/1200px-Star_red.svg.png">');
        document.write ("<br>");
        document.write ("You still get one star..."); 
        document.write ("<br>");
        document.write ("No, no... It's on the house. Enjoy your time.");
    }
    for(let i = 1; i <= likePM; i++){
        document.write('<img id = "stars" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Star_red.svg/1200px-Star_red.svg.png">');
    }
}