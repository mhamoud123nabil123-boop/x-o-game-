let game=document.querySelector(".game")
let title=document.querySelector(".title")
let container=document.querySelector(".container")
let square=[]
let turn="x"

for (let index = 0; index <9; index++) {
    square[index]=document.createElement("div")
    square[index].classList.add("square")
    square[index].id=`item${index + 1}`
    container.appendChild(square[index])
}
function endGame(num1,num2,num3) {
    title.textContent=`winner ${num1.textContent} `
    title.style.backgroundColor="#00aa00"
    setInterval(function () {
        title.textContent += "."
    },1000)
    setTimeout(function () {
        location.reload()
    },4000)
    num1.style.backgroundColor="#00aa00"
    num2.style.backgroundColor="#00aa00"
    num3.style.backgroundColor="#00aa00"
}
function winner() {
    // row
    if (square[0].textContent===square[1].textContent && square[1].textContent===square[2].textContent && square[2].textContent!=="") {
        endGame(square[0],square[1],square[2])
    }
    else if(square[3].textContent===square[4].textContent && square[4].textContent===square[5].textContent && square[5].textContent!=="") {
        endGame(square[3],square[4],square[5])
    }
    else if(square[6].textContent===square[7].textContent && square[7].textContent===square[8].textContent && square[8].textContent!=="") {
        endGame(square[6],square[7],square[8])
    }
    //coulmn
    else if(square[0].textContent===square[3].textContent && square[3].textContent===square[6].textContent && square[6].textContent!=="") {
        endGame(square[0],square[3],square[6])
    }
    else if(square[1].textContent===square[4].textContent && square[4].textContent===square[7].textContent && square[7].textContent!=="") {
        endGame(square[1],square[4],square[7])
    }
    else if(square[2].textContent===square[5].textContent && square[5].textContent===square[8].textContent && square[8].textContent!=="") {
        endGame(square[2],square[5],square[8])
    }
    //cross
    else if(square[0].textContent===square[4].textContent && square[4].textContent===square[8].textContent && square[8].textContent!=="") {
        endGame(square[0],square[4],square[8])
    }
    else if(square[2].textContent===square[4].textContent && square[4].textContent===square[6].textContent && square[6].textContent!=="") {
        endGame(square[2],square[4],square[6])
    }
    }
for (let index = 0; index <9; index++){
    square[index].addEventListener("click",function () {
    if (turn === "x" && this.textContent ==="") {
        this.textContent="x"
        turn="o"
        title.textContent="turn o"
        title.style.color="white"
    }
    else if (turn === "o" && this.textContent ==="") {
        this.textContent="o"
        turn="x"
        title.textContent="turn x"
    }
    this.style.backgroundColor="black"
    winner()
})
}
