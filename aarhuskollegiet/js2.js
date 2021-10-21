
//dots//

document.querySelector(".btn").addEventListener("click", move);

function move() {
    document.querySelector(".slider__inner").style.transform = "translateX(-25%)";
    document.querySelector("#first").style.backgroundColor = "#bbb";
    document.querySelector("#second").style.backgroundColor = "#48485B";
}


document.querySelector(".btn1").addEventListener("click", move1);

function move1() {
    document.querySelector(".slider__inner").style.transform = "translateX(-50%)";
    document.querySelector("#second").style.backgroundColor = "#bbb";
    document.querySelector("#third").style.backgroundColor = "#48485B";
}


document.querySelector(".btn2").addEventListener("click", move2);

function move2() {
    document.querySelector(".slider__inner").style.transform = "translateX(-75%)";
    document.querySelector("#third").style.backgroundColor = "#bbb";
    document.querySelector("#forth").style.backgroundColor = "#48485B";
}


document.querySelector(".btn3").addEventListener("click", move3);

function move3() {
    document.querySelector(".slider__inner").style.transform = "translateX(-100%)";
    document.querySelector("#forth").style.backgroundColor = "#bbb";
    document.querySelector("#fifth").style.backgroundColor = "#48485B";
}


//skip

document.querySelector(".skip_btn").addEventListener("click", skip);

function skip() {
    window.location.href = "home.html";
}



//back//


document.querySelector(".back1").addEventListener("click", back);

function back() {
    document.querySelector(".slider__inner").style.transform = "translateX(+0%)";
    document.querySelector("#first").style.backgroundColor = "#48485B";
    document.querySelector("#second").style.backgroundColor = "#bbb";
}

document.querySelector(".back2").addEventListener("click", back2);

function back2() {
    document.querySelector(".slider__inner").style.transform = "translateX(-25%)";
    document.querySelector("#second").style.backgroundColor = "#48485B";
    document.querySelector("#third").style.backgroundColor = "#bbb";
}

document.querySelector(".back3").addEventListener("click", back3);

function back3() {
    document.querySelector(".slider__inner").style.transform = "translateX(-50%)";
    document.querySelector("#third").style.backgroundColor = "#48485B";
    document.querySelector("#forth").style.backgroundColor = "#bbb";
}

document.querySelector(".back4").addEventListener("click", back4);

function back4() {
    document.querySelector(".slider__inner").style.transform = "translateX(-75%)";
    document.querySelector("#forth").style.backgroundColor = "#48485B";
    document.querySelector("#fifth").style.backgroundColor = "#bbb";
}