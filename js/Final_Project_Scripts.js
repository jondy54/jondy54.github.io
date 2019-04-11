var homeimages = ["AlternateHomePageFace.PNG", "HomePageFace.PNG"];
var count = 0;
function change_Home() {
    var i = document.getElementById("homeImg");
    i.src = "images/" + homeimages[count];
    count++;
    if (count >= 2) {
        count = 0;
    }
}

function change_About() {
    var img=document.getElementById("aboutMeImage");
    img.src="images/Mandaluyong.png";
}

function return_About() {
    var img=document.getElementById("aboutMeImage");
    img.src="images/PhilippinesFlag.png";
}

function submission() {
    alert("Thank you for your submission.");
}

function random_roll() {
    var num = Math.floor((Math.random() * 10) + 1);
    random_num.innerHTML = num;
    if(num==10) {
        alert("Congratulations! You found a 10.");
    }
}