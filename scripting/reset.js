
function reset(){

    /*Input Block*/
    // Button  Logics 
    const b00 = document.getElementById("btn00");
    const b01 = document.getElementById("btn01");
    const b02 = document.getElementById("btn02");
    const b10 = document.getElementById("btn10");
    const b11 = document.getElementById("btn11");
    const b12 = document.getElementById("btn12");
    const b20 = document.getElementById("btn20");
    const b21 = document.getElementById("btn21");
    const b22 = document.getElementById("btn22");

    
    b00.innerHTML = "";
    b01.innerHTML = "";
    b02.innerHTML = "";
    b10.innerHTML = "";
    b11.innerHTML = "";
    b12.innerHTML = "";
    b20.innerHTML = "";
    b21.innerHTML = "";
    b22.innerHTML = "";
    showTurn('x');
    arr = [[0,0,0],
    [0,0,0],
    [0,0,0]];
    turn = 6;

    bclick = true;
    dclick = 1;
    tempX=0;
    tempY=0;
    temp = 0;

}

