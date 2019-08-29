// Button  Logics 
var b00 = document.getElementById("btn00");
var b01 = document.getElementById("btn01");
var b02 = document.getElementById("btn02");
var b10 = document.getElementById("btn10");
var b11 = document.getElementById("btn11");
var b12 = document.getElementById("btn12");
var b20 = document.getElementById("btn20");
var b21 = document.getElementById("btn21");
var b22 = document.getElementById("btn22");

let bclick = true;
let dclick = 1;
let tempX=0;
let tempY=0;
let temp = 0;

// Colors
const defaul = "btn btn-default";
const suggest = "btn btn-suggest";
const win = "btn btn-winner";

let arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let btnsArr = [
    [b00,b01,b02],
    [b10,b11,b12],
    [b20,b21,b22]
];


o = 'o';
x = 'x';
var img_x = `<img src="img/cross.png" class="stone">`;
var img_o = `<img src="img/circle.png" class="stone">`;
let turn = 6;

//Set Turn Image 
function startGameTurn(){
    const turn = document.getElementById('whose_turn');
    var x_avat = `<img src="img/cross.png" class="avatar">`;
    turn.innerHTML = `
        `+x_avat+`<p>Turn<p>
    `;
}
window.onload = startGameTurn;

// b00.innerHTML = img_x;
function onclk(btnid,X,Y){
  //console.log(btnid+' '+X+' '+Y);

  let btnName = btnsArr[X][Y];
    if(turn != 0){
        if(btnName.innerHTML == '' && bclick == true){
            btnName.innerHTML = img_x;
            showTurn(o);
            bclick = false;
            turn--;
            arr[X][Y] = 1;
            console.dir(arr);
            checkwin();
        }else if(btnName.innerHTML == '' && bclick == false){
            btnName.innerHTML = img_o;
            showTurn(x);
            bclick = true;
            turn--;
            arr[X][Y] = 2;
            console.dir(arr);
            checkwin();
        }
    }else{
        let btnBg = btnName.className;
        console.log(btnBg);
        if((btnName.innerHTML == img_x && bclick == true) || (btnName.innerHTML != img_o && btnBg == suggest && dclick == 1)){
            console.log("big if");
            if(btnBg != suggest && bclick == true){
                setallcolors();
                console.log("if");
                colorNear(2,X,Y);
                tempX = X;
                tempY = Y;
                dclick = 1;
            }else if(btnBg == suggest && bclick == true){
                console.log(tempX+''+tempY);
                setallcolors();
                btnName.innerHTML = img_x;
                showTurn(o);
                arr[tempX][tempY] = 0;
                arr[X][Y] = 1;
                let btnTemp = btnsArr[tempX][tempY];
                btnTemp.innerHTML = '';
                dclick = 0;
                bclick = false;
                checkwin();
            }
        }else if((btnName.innerHTML == img_o && bclick == false) || (btnName.innerHTML != img_x && btnBg == suggest && dclick == 2)){
            if(btnBg != suggest && bclick == false){
                setallcolors();
                colorNear(1,X,Y);
                tempX = X;
                tempY = Y;
                dclick =2;
            }else if(btnBg == suggest && bclick == false){
                setallcolors();
                btnName.innerHTML = img_o;
                showTurn(x);
                arr[tempX][tempY] = 0;
                arr[X][Y] = 2;
                let btnTemp = btnsArr[tempX][tempY];
                btnTemp.innerHTML = '';
                dclick = 0;
                bclick = true;
                checkwin();
            }
        }
    }
}