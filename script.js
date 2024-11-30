const stamps = ['X','O'];
let flag = 0;
function CreateSections(){
    for(let i = 0;i<9;i++){
        const button = document.createElement("button");
        button.setAttribute("class","btn");
        button.setAttribute("id","button"+(i+1));
        button.textContent = "";
        const gameBoard = document.getElementById("container");
        gameBoard.appendChild(button);
    }
}
CreateSections();
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        if(btn.innerHTML===""){
            btn.innerHTML=stamps[flag];
            flag=1-flag;
            CheckWinner(btns);
        }
    })
});
function CheckWinner(buttons){
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i = 0;i<winConditions.length;i++){

    }
}

