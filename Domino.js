// Faire apparaitre le choix des noms, avec quelques transitions
var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];

var nbofplayers;
var order;
var nbdominoes;

var playernames = document.getElementsByClassName("usernameinput");
var arraypn = [...playernames];

// Players setup menu
arraypc[0].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "hidden";
    document.getElementById("username3").style.opacity = 0;
    document.getElementById("username4").style.visibility = "hidden";
    document.getElementById("username4").style.opacity = 0;
    nbofplayers = 2;
    nbdominoes = 7;
    console.log(nbofplayers);
});

arraypc[1].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "visible";
    document.getElementById("username3").style.opacity = 1;
    document.getElementById("username4").style.visibility = "hidden";
    document.getElementById("username4").style.opacity = 0;
    nbofplayers = 3;
    nbdominoes = 6;
    console.log(nbofplayers);
});

arraypc[2].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "visible";
    document.getElementById("username3").style.opacity = 1;
    document.getElementById("username4").style.visibility = "visible";
    document.getElementById("username4").style.opacity = 1;
    nbofplayers = 4;
    nbdominoes = 6;
    console.log(nbofplayers);
});

// Creating Players as objects
function Player(order, username, domi, playerhtml) {

    this.order = order;
    this.username = username;
    this.domi = domi;
    this.playerhtml = playerhtml;
}

var player1html = document.getElementById("box1");
var player2html = document.getElementById("box2");
var player3html = document.getElementById("box3");
var player4html = document.getElementById("box4");

// username function, get the value of the username input
function getusername(i) {
    var u = arraypn[i].value;
    return u;
}

var arrayboard = [];
var arraypioche = [];
var arrayrack = [];
var arrayplayer1 = [];
var arrayplayer2 = [];
var arrayplayer3 = [];
var arrayplayer4 = [];

// Each player is a prototype of the Player object above. cf prototypage et pseudoclassical instanciation: https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b
var player1 = new Player(order, getusername(0), arrayplayer1, player1html);
var player2 = new Player(order, getusername(1), arrayplayer2, player2html);
var player3 = new Player(order, getusername(2), arrayplayer3, player3html);
var player4 = new Player(order, getusername(3), arrayplayer4, player4html);

// Create an array of the players
var arrayplayers = [player1, player2, player3, player4];

 if (nbofplayers === 2) {
    player1.order = 1;   
    player2.order = 2;
}

else if (nbofplayers === 3) {
    player1.order = 1;
    player2.order = 2;
    player3.order = 3;
}

else {
    player1.order = 1;
    player2.order = 2;
    player3.order = 3;
    player4.order = 4;
}

// Dominos

var domino00html = document.createElement("img");
domino00html.src = "Dominos images/[0,0].png";
domino00html.className = "domino";
domino00html.name = "domino00";
document.getElementById("reserve").appendChild(domino00html);

var domino01html = document.createElement("img");
domino01html.src = "Dominos images/[0,1].png";
domino01html.className = "domino";
domino01html.name = "domino01";
document.getElementById("reserve").appendChild(domino01html);

var domino02html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino02";
document.getElementById("reserve").appendChild(domino02html);

var domino03html = document.createElement("img");
domino03html.src = "Dominos images/[0,3].png";
domino03html.className = "domino";
domino03html.name = "domino03";
document.getElementById("reserve").appendChild(domino03html);

var domino04html = document.createElement("img");
domino04html.src = "Dominos images/[0,4].png";
domino04html.className = "domino";
domino04html.name = "domino04";
document.getElementById("reserve").appendChild(domino04html);

var domino05html = document.createElement("img");
domino05html.src = "Dominos images/[0,5].png";
domino05html.className = "domino";
domino05html.name = "domino05";
document.getElementById("reserve").appendChild(domino05html);

var domino06html = document.createElement("img");
domino06html.src = "Dominos images/[0,6].png";
domino06html.className = "domino";
domino06html.name = "domino06";
document.getElementById("reserve").appendChild(domino06html);

var domino11html = document.createElement("img");
domino11html.src = "Dominos images/[1,1].png";
domino11html.className = "domino";
domino11html.name = "domino11";
document.getElementById("reserve").appendChild(domino11html);

var domino12html = document.createElement("img");
domino12html.src = "Dominos images/[1,2].png";
domino12html.className = "domino";
domino12html.name = "domino12";
document.getElementById("reserve").appendChild(domino12html);

var domino13html = document.createElement("img");
domino13html.src = "Dominos images/[1,3].png";
domino13html.className = "domino";
domino13html.name = "domino13";
document.getElementById("reserve").appendChild(domino13html);

var domino14html = document.createElement("img");
domino14html.src = "Dominos images/[1,4].png";
domino14html.className = "domino";
domino14html.name = "domino14";
document.getElementById("reserve").appendChild(domino14html);

var domino15html = document.createElement("img");
domino15html.src = "Dominos images/[1,5].png";
domino15html.className = "domino";
domino15html.name = "domino15";
document.getElementById("reserve").appendChild(domino15html);

var domino16html = document.createElement("img");
domino16html.src = "Dominos images/[1,6].png";
domino16html.className = "domino";
domino16html.name = "domino16";
document.getElementById("reserve").appendChild(domino16html);

var domino22html = document.createElement("img");
domino22html.src = "Dominos images/[2,2].png";
domino22html.className = "domino";
domino22html.name = "domino22";
document.getElementById("reserve").appendChild(domino22html);

var domino23html = document.createElement("img");
domino23html.src = "Dominos images/[2,3].png";
domino23html.className = "domino";
domino23html.name = "domino23";
document.getElementById("reserve").appendChild(domino23html);

var domino24html = document.createElement("img");
domino24html.src = "Dominos images/[2,4].png";
domino24html.className = "domino";
domino24html.name = "domino24";
document.getElementById("reserve").appendChild(domino24html);

var domino25html = document.createElement("img");
domino25html.src = "Dominos images/[2,5].png";
domino25html.className = "domino";
domino25html.name = "domino25";
document.getElementById("reserve").appendChild(domino25html);

var domino26html = document.createElement("img");
domino26html.src = "Dominos images/[2,6].png";
domino26html.className = "domino";
domino26html.name = "domino26";
document.getElementById("reserve").appendChild(domino26html);

var domino33html = document.createElement("img");
domino33html.src = "Dominos images/[3,3].png";
domino33html.className = "domino";
domino33html.name = "domino33";
document.getElementById("reserve").appendChild(domino33html);

var domino34html = document.createElement("img");
domino34html.src = "Dominos images/[3,4].png";
domino34html.className = "domino";
domino34html.name = "domino34";
document.getElementById("reserve").appendChild(domino34html);

var domino35html = document.createElement("img");
domino35html.src = "Dominos images/[3,5].png";
domino35html.className = "domino";
domino35html.name = "domino35";
document.getElementById("reserve").appendChild(domino35html);

var domino36html = document.createElement("img");
domino36html.src = "Dominos images/[3,6].png";
domino36html.className = "domino";
domino36html.name = "domino36";
document.getElementById("reserve").appendChild(domino36html);

var domino44html = document.createElement("img");
domino44html.src = "Dominos images/[4,4].png";
domino44html.className = "domino";
domino44html.name = "domino44";
document.getElementById("reserve").appendChild(domino44html);

var domino45html = document.createElement("img");
domino45html.src = "Dominos images/[4,5].png";
domino45html.className = "domino";
domino45html.name = "domino45";
document.getElementById("reserve").appendChild(domino45html);

var domino46html = document.createElement("img");
domino46html.src = "Dominos images/[4,6].png";
domino46html.className = "domino";
domino46html.name = "domino46";
document.getElementById("reserve").appendChild(domino46html);

var domino55html = document.createElement("img");
domino55html.src = "Dominos images/[5,5].png";
domino55html.className = "domino";
domino55html.name = "domino55";
document.getElementById("reserve").appendChild(domino55html);

var domino56html = document.createElement("img");
domino56html.src = "Dominos images/[5,6].png";
domino56html.className = "domino";
domino56html.name = "domino56";
document.getElementById("reserve").appendChild(domino56html);

var domino66html = document.createElement("img");
domino66html.src = "Dominos images/[6,6].png";
domino66html.className = "domino";
domino66html.name = "domino66";
document.getElementById("reserve").appendChild(domino66html);

//getElementsByClassName returns a Nodelist
var dominoes = document.getElementsByClassName("domino");

// Turn a Nodelist into an Array, works on modern browsers
var arraydom = [...dominoes];
console.log(arraydom);

function gettop(i) {
    var t = window.getComputedStyle(arraydom[i]).getPropertyValue("top");
    return t;
}

function getleft(i) {
    var l = window.getComputedStyle(arraydom[i]).getPropertyValue("left");
    return l;
}

// Get the direction of a domino
function getdirection(i) {
    var dir = window.getComputedStyle(arraydom[i]).getPropertyValue("transform");
    if (dir == "matrix(0, -1, 1, 0, 0, 0)") {
        return "west";
    }

    else if (dir == "matrix(0, 1, -1, 0, 0, 0)") {
        return "east";
    }

    else if (dir == "matrix(-1, 0, 0, -1, 0, 0)") {
        return "south";
    }

    else {
        return "north";
    }

}

function getrotation(i) {}

// Creating Dominoes as objects

function Domino(tuiletop, tuilebottom, top, left, direction, rotation, html) {

    this.tuiletop = tuiletop;
    this.tuilebottom = tuilebottom;
    this.top = top;
    this.left = left;
    this.direction = direction;
    this.rotation = rotation;
    this.html = html;
}

var domino00 = new Domino(0, 0, gettop(0), getleft(0), getdirection(0), getrotation(0), domino00html);
var domino01 = new Domino(0, 1, gettop(1), getleft(1), getdirection(1), getrotation(1), domino01html);
var domino02 = new Domino(0, 2, gettop(2), getleft(2), getdirection(2), getrotation(2), domino02html);
var domino03 = new Domino(0, 3, gettop(3), getleft(3), getdirection(3), getrotation(3), domino03html);
var domino04 = new Domino(0, 4, gettop(4), getleft(4), getdirection(4), getrotation(4), domino04html);
var domino05 = new Domino(0, 5, gettop(5), getleft(5), getdirection(5), getrotation(5), domino05html);
var domino06 = new Domino(0, 6, gettop(6), getleft(6), getdirection(6), getrotation(6), domino06html);
var domino11 = new Domino(1, 1, gettop(7), getleft(7), getdirection(7), getrotation(7), domino11html);
var domino12 = new Domino(1, 2, gettop(8), getleft(8), getdirection(8), getrotation(8), domino12html);
var domino13 = new Domino(1, 3, gettop(9), getleft(9), getdirection(9), getrotation(9), domino13html);
var domino14 = new Domino(1, 4, gettop(10), getleft(10), getdirection(10), getrotation(10), domino14html);
var domino15 = new Domino(1, 5, gettop(11), getleft(11), getdirection(11), getrotation(11), domino15html);
var domino16 = new Domino(1, 6, gettop(12), getleft(12), getdirection(12), getrotation(12), domino16html);
var domino22 = new Domino(2, 2, gettop(13), getleft(13), getdirection(13), getrotation(13), domino22html);
var domino23 = new Domino(2, 3, gettop(14), getleft(14), getdirection(14), getrotation(14), domino23html);
var domino24 = new Domino(2, 4, gettop(15), getleft(15), getdirection(15), getrotation(15), domino24html);
var domino25 = new Domino(2, 5, gettop(16), getleft(16), getdirection(16), getrotation(16), domino25html);
var domino26 = new Domino(2, 6, gettop(17), getleft(17), getdirection(17), getrotation(17), domino26html);
var domino33 = new Domino(3, 3, gettop(18), getleft(18), getdirection(18), getrotation(18), domino33html);
var domino34 = new Domino(3, 4, gettop(19), getleft(19), getdirection(19), getrotation(19), domino34html);
var domino35 = new Domino(3, 5, gettop(20), getleft(20), getdirection(20), getrotation(20), domino35html);
var domino36 = new Domino(3, 6, gettop(21), getleft(21), getdirection(21), getrotation(21), domino36html);
var domino44 = new Domino(4, 4, gettop(22), getleft(22), getdirection(22), getrotation(22), domino44html);
var domino45 = new Domino(4, 5, gettop(23), getleft(23), getdirection(23), getrotation(23), domino45html);
var domino46 = new Domino(4, 6, gettop(24), getleft(24), getdirection(24), getrotation(24), domino46html);
var domino55 = new Domino(5, 5, gettop(25), getleft(25), getdirection(25), getrotation(25), domino55html);
var domino56 = new Domino(5, 6, gettop(26), getleft(26), getdirection(26), getrotation(26), domino56html);
var domino66 = new Domino(6, 6, gettop(27), getleft(27), getdirection(27), getrotation(27), domino66html);
// Creation of an Array of my domino objects

var dominoarray = [domino00, domino01, domino02, domino03, domino04, domino05, domino06, domino11, domino12, domino13, domino14, domino15, domino16, domino22, domino23, domino24, domino25, domino26, domino33, domino34, domino35, domino36, domino44, domino45, domino46, domino55, domino56, domino66];

//Mixing the domino array

function shuffle() {
    let len = dominoarray.length - 1;
    let dominos = dominoarray.slice(0); //make a copy of the original array
     for  ( var a = len; a >= 0 ; a--){
          //select random index from 0 to array length
          var j = Math.floor(Math.random() * (dominos.length - 1));
  
          /*delete element at selected index from copy of the original array, 
          so it can't be randomly chosen again*/ 
          let temp = dominos.splice(j, 1);
  
          //replace the element in the origin array with the randomly selected one
          dominoarray[a] = temp[0]; 
     }
  }

// pioche random
function pioche(c) {

    var r = Math.floor(Math.random()*arraypioche.length);
    var dompioche = arraypioche[r];
    arrayplayers[c].domi.push(dompioche);
    document.getElementById("hand").appendChild(dompioche.html);
    arraypioche.splice(r, 1);
}

//distribution of dominos to players
function distribution() {
    for (var k=0 ; k < nbofplayers ; k++) {

        for (var j=0 ; j < nbdominoes ; j++) {
        arrayplayers[k].domi.push(dominoarray[0]);
        let leng = arrayplayers[k].domi.length-1;
        arrayplayers[k].playerhtml.appendChild(arrayplayers[k].domi[leng].html);
        dominoarray.splice(0, 1);
        }

    }

    // distribution of dominos to pioche
    var pl = 0;
    for (var m = dominoarray.length -1 ; m >=0 ; m--) {
        arraypioche.push(dominoarray[m]);
        document.getElementById("pioche").appendChild(arraypioche[pl].html);
        pl++;
        dominoarray.splice(m, 1);
    }

}

// placement of dominos on the board



// algorithm of the game - work in progress
/*
function game() {
    var gagnantindertermine = (arrayplayer1.length>0 && arrayplayer2.length>0 && arrayplayer3.length>0 && arrayplayer4.length>0);

    // while (gagnantindertermine === true){
        for (var o=0; o < nbofplayers ; o++) {
            arrayplayers[o].playerhtml.style.borderColor = "white";
            var currentplayer = arrayplayers[o].domi;
            for (var f=0; f < currentplayer.length; f++) {
                document.getElementById("hand").appendChild(currentplayer[f].html);
            }

            if (arrayboard.length>0) {

                for (var p = 0; p < currentplayer.length; p++) {
                    var self = currentplayer[p];
                    var boardend = arrayboard.length -1;
                    if (currentplayer[p].tuilebottom === arrayboard[0].tuilebottom || currentplayer[p].tuiletop === arrayboard[0].tuilebottom || currentplayer[p].tuilebottom === arrayboard[0].tuiletop || currentplayer[p].tuiletop === arrayboard[0].tuiletop || currentplayer[p].tuilebottom === arrayboard[boardend].tuilebottom || currentplayer[p].tuiletop === arrayboard[boardend].tuilebottom || currentplayer[p].tuilebottom === arrayboard[boardend].tuiletop || currentplayer[p].tuiletop === arrayboard[boardend].tuiletop)
                    { 
                        self.html.addEventListener('click', function () {
                            alert("positioning2");
                        });
                    }
                
                for (var w = 0; w < currentplayer.length; w++) {

                        if (currentplayer[w].tuilebottom !== arrayboard[0].tuilebottom && currentplayer[w].tuiletop !== arrayboard[0].tuilebottom && currentplayer[w].tuilebottom !== arrayboard[0].tuiletop && currentplayer[w].tuiletop !== arrayboard[0].tuiletop && currentplayer[w].tuilebottom !== arrayboard[boardend].tuilebottom && currentplayer[w].tuiletop !== arrayboard[boardend].tuilebottom && currentplayer[w].tuilebottom !== arrayboard[boardend].tuiletop && currentplayer[w].tuiletop !== arrayboard[boardend].tuiletop)
                        {
                            pioche(o);
                            alert("pioche works");
                        }    
                    }
                }
            }

            if (arrayboard.length===0) {
                // while (arrayboard.length===0) {
                    for (var e = 0; e < currentplayer.length; e++) {
                        var elf = currentplayer[e];
                            elf.html.addEventListener('click', function () {
                                alert("it works so far");
                            });
                    }
                // }
            }
        }
    // }
}
*/
var o =0;
var currentplayer = arrayplayers[o].domi;
function highlight(pla) {
     arrayplayers[pla].playerhtml.style.borderColor = "orange";
}


function showhand(f) {
for (var f=0; f < currentplayer.length; f++) {
    document.getElementById("hand").appendChild(currentplayer[f].html);
    }
}

function placement(p) {
    var self = currentplayer[p];
    var boardend = arrayboard.length -1;
    if (arrayboard.length===0) {
        self.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(currentplayer[p].html);
        });
        return;
    }

    if (currentplayer[p].tuilebottom === arrayboard[0].tuilebottom || currentplayer[p].tuiletop === arrayboard[0].tuilebottom || currentplayer[p].tuilebottom === arrayboard[0].tuiletop || currentplayer[p].tuiletop === arrayboard[0].tuiletop || currentplayer[p].tuilebottom === arrayboard[boardend].tuilebottom || currentplayer[p].tuiletop === arrayboard[boardend].tuilebottom || currentplayer[p].tuilebottom === arrayboard[boardend].tuiletop || currentplayer[p].tuiletop === arrayboard[boardend].tuiletop)
    { 
        self.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(currentplayer[p].html);
        });
        return;
    }
    else {
        alert("Injouable!");
        document.getElementById("pioche").addEventListener('click', pioche(o));
        return;
    }
}


// Set usernames and start the game

function startgame() {
    if (arraypn[0].value == "") {
        document.getElementById("player1").textContent = "Joueur 1";
    }
    else {
        document.getElementById("player1").textContent = player1.username;
    }

    if (arraypn[1].value == "") {
        document.getElementById("player2").textContent = "Joueur 2";
    }
    else {
        document.getElementById("player2").textContent = player2.username;
    }

    if (arraypn[2].value == "") {
        document.getElementById("player3").textContent = "Joueur 3";
    }
    else {
        document.getElementById("player3").textContent = player3.username;
    }

    if (arraypn[3].value == "") {
        document.getElementById("player4").textContent = "Joueur 4";
    }
    else {
        document.getElementById("player4").textContent = player4.username;
    }
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("game").style.opacity = 1;
    document.getElementById("game").style.zIndex = 15;
    document.getElementById("startmenu").style.display = "none";

    shuffle();
    distribution();
    console.log(arrayplayer1);
    console.log(arrayplayer2);
    console.log(arrayplayer3);
    console.log(arrayplayer4);
    console.log(arraypioche);
    console.log(dominoarray);
    console.log(arrayboard[0]);
    // game();
    highlight(0);
    showhand(0);
    placement(0);
}

var start = document.getElementById("startbtn");
start.addEventListener('click', startgame);

var menubtn = document.getElementById("menubutton");
menubtn.addEventListener('click', function () {
    document.getElementById("menucontainer").style.visibility = "visible";
    document.getElementById("menucontainer").style.opacity = 1;
});

var menubtn = document.getElementById("backtogame");
menubtn.addEventListener('click', function () {
    document.getElementById("menucontainer").style.visibility = "hidden";
    document.getElementById("menucontainer").style.opacity = 0;
});
