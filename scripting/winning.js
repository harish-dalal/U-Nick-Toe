function loadImg(){
    
}
function winShow(player){
    const mb = document.getElementById("modalBody");
    var x_avat = `<img src="img/cross.png" class="avatar">`;
    var o_avat = `<img src="img/circle.png" class="avatar">`;
    $("#myModal").modal();
    switch (player) {
        case 1:
            avatar = x_avat;
            break;
    
        case 2:
            avatar = o_avat;
            break;
    }
    mb.innerHTML = `
        `+avatar+`
        <p>Player `+player+` Won</p>
    `;
}

function playAgain(){
    reset();
    setallcolors();
    showTurn('x');
}

function toOptions(){
    window.top.location = './option.html';
}


function showTurn(player){
    const turn = document.getElementById('whose_turn');

    var x_avat = `<img src="img/cross.png" class="avatar">`;
    var o_avat = `<img src="img/circle.png" class="avatar">`;
    let avatar;
    switch (player) {
        case 'x':
            avatar = x_avat;
            break;
    
        case 'o':
            avatar = o_avat;
            break;
    }

    turn.innerHTML = `
        `+avatar+`<p>Turn<p>
    `;
    console.log(player+' Turn');
}