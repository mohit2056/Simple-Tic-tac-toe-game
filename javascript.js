let boxex = document.querySelectorAll(".box");
let reset =document.querySelector("#Reset");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerx, player0

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () => {
    turn0 = true;
    enableboxex();
    msgcontainer.classList.add("hide");
};  



boxex.forEach( (box) => {
    box.addEventListener('click', () => {
        console.log("box clicked");
if (turn0) {
    //player0
    box.innerText = "0";
    box.classList.add("o");

    turn0 = false;
} else {
    //playerx
    box.innerText = "X";
    box.classList.add("x");
    turn0 = true;
} 
   box.disabled = true;

   checkwinner(box.innerText);

    });
});

   const disableboxex = () => {
    boxex.forEach((box) => {
        box.disabled = true;
    });
};

    const enableboxex = () => {
    boxex.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("x", "o");
    });
};

   const showwinner = (winner) => { 
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxex();
   }; 
    

const checkwinner = (currentPlayer) => {
    for (let pattern of winpattern) {
        let pos1val = boxex[pattern[0]].innerText;
        let pos2val = boxex[pattern[1]].innerText;
        let pos3val = boxex[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner " + pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener('click', resetgame);
reset.addEventListener('click', resetgame);

