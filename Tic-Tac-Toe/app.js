let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let winMsg=document.querySelector("#winMsg");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg");
let turnO=true; //players turn
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let cnt=0;// for tracking match draw condition
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        cnt=cnt+1;
        if(cnt===9){
            checkWinner()===false;// if no one is winner then match draw
            matchDraw();
            cnt=0;
        }else{
            checkWinner();
        }
    });
});
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.disabled=true;
            box.style.color="black";
            box.style.backgroundColor="grey";
        }else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;
            box.style.backgroundColor="coral";
        }
        checkWinner();
    });
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";//seting innerText empty for reset or new game condition 
    }
}
const showWinner =(val)=>{
        winMsg.innerText=`Congratulations,Winner is ${val}`;
        msgContainer.classList.remove("hide");
        disableBox();
}
const matchDraw=()=>{
    winMsg.innerText=`Match Draw`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner =()=> {
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};
const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
    boxes.forEach((box)=>{
        box.style.backgroundColor="bisque";
    })
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);