//ref imgs
let rocaImg;
let comidaImg;
let powerImg;
let pacmanImg;
let redGhostImg, pinkGhostImg, greenGhostImg, purpleGhostImg;
var weak
//ref var
let roca;
let plat;
let pacman;
let redGhost, pinkGhost, greenGhost, purpleGhost;
//ref arrays
let rocas = [];
let comidas =[];
let powerups =[];
let ghosts = [];
let activeGhosts = [];



function preload(){
    rocaImg = loadImage("images/roca.bmp");
    comidaImg = loadImage("images/food.png");
    powerImg = loadImage("images/grape.png");
    pacmanImg = loadImage("images/pac.png");
    redGhostImg = loadImage("images/red.png");
    greenGhostImg = loadImage("images/green.png");
    pinkGhostImg = loadImage("images/pink.png");
    purpleGhostImg = loadImage("images/purple.png");
    weak = loadImage("images/weak.png");
}

function setup(){
    createCanvas(1330,725);
    roca = new Roca(200,300);
    plat = new Plataforma();

    for(let i = 0; i< plat.filas; i++){
        for(let j = 0; j < plat.columnas; j++){

            if ( plat.plataform[i][j] === "*")
                rocas.push(new Roca(j*19, i*19))
                
            if ( plat.plataform[i][j] === "-")
                comidas.push(new Comida(j*19, i*19))
               
            if ( plat.plataform[i][j] === "p")
                powerups.push(new Powerup(j*19, i*19))

            if ( plat.plataform[i][j] === "pac")
                pacman = new Pacman(j*19, i*19)

            if ( plat.plataform[i][j] === "re")
                ghosts.push (new Fantasma(j*19, i*19, redGhostImg))
            if ( plat.plataform[i][j] === "gr")
                ghosts.push (new Fantasma(j*19, i*19, greenGhostImg))
            if ( plat.plataform[i][j] === "pu")
                ghosts.push (new Fantasma(j*19, i*19, purpleGhostImg))
            if ( plat.plataform[i][j] === "pi")
                ghosts.push (new Fantasma(j*19, i*19, pinkGhostImg))
        }
    }
    sacarFantasmas();
}
function draw(){
  background(0);
    for (let i = 0; i < rocas.length; i++){
        rocas[i].show();
    }

    for (let i = 0; i < comidas.length; i++){
        comidas[i].show();
    }

    for (let i = 0; i < powerups.length; i++){
        powerups[i].show();
    }
    for (let i = 0; i < ghosts.length; i++){
        ghosts[i].show();
    }
    for (let i = 0; i < activeGhosts.length; i++){
        frameRate(10);
        activeGhosts[i].show();
        activeGhosts[i].move(rocas);
        if( pacman.colission(activeGhosts[i]) ){
       
            alert("Game Over :( ");
            window.location.reload();
           /* if(activeGhosts.isWeak[i] === false){ // error al leer esta linea revisar
               // activeGhosts.isWeak[i] = false;
               // ghosts.push(new Fantasma(19*12,19*10,activeGhosts[i].img));
               // activeGhosts.splice(i,1);
               // makeGhostStrong();
               alert("func :( ");
            }else{
                alert("Game Over :( ");
                window.location.reload();
           }*/
        }
    }
    for (let i = 0; i < powerups.length; i++){
        if(pacman.colission(powerups[i])){
            makeWeak();
            powerups.splice(i,1);
        }
    }

    pacman.show();

    for (let i = 0; i < comidas.length; i++){
        if(pacman.eat(comidas[i]))
           comidas.splice(i,1)
    }
    if(comidas.length <= 0){
        alert("You Win! :) ");
        window.location.reload();
    }
}
function sacarFantasmas(){
    if(ghosts.length > 0){
        let g = ghosts.pop();
        g.salir(plat);
        activeGhosts.push(g);
    }
        setTimeout(sacarFantasmas,2000);
}

function makeWeak(){
    for(let i = 0; i < activeGhosts.length; i++)
        activeGhosts[i].isWeak = true;
}
function makeGhostStrong(){
    for(let i = 0; i < activeGhosts.length; i++)
        activeGhosts[i].isWeak = false;
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        if(plat.plataform[pacman.y/19][pacman.x/19 + 1] !== "*")
            pacman.move(0);
    }
    if(keyCode === DOWN_ARROW){
        if(plat.plataform[pacman.y/19 + 1][pacman.x/19] !== "*")
            pacman.move(1);
    }
    if(keyCode === LEFT_ARROW){
        if(plat.plataform[pacman.y/19][pacman.x/19 - 1] !== "*")
            pacman.move(2);
    }
    if(keyCode === UP_ARROW){
        if(plat.plataform[pacman.y/19 - 1][pacman.x/19] !== "*")
            pacman.move(3);
    }
}