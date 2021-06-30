let day = new Date ();
let time = day.getHours ();
console.log(time);
if (time <= 10){
    document.write("Good Morning! and Welcome!")
} else if (time >10 && time < 14){
    document.write("Good Afternoon! and Welcome!")
} else {
    document.write("Good Evening! and Welcome!")
}