//radio de boca
i = 1.85; 
x = 0.2;
speed = 0.02;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  //pacman body
  fill(255, 200, 0);
  ellipse(200, 200, 200, 200);
 
  //move mouth
  fill(0);
  if(i >= 2 || i <= 1.8){
    speed = speed * -1  
  }
  arc(200, 200, 200, 200, (i+=speed)*PI, (x-=speed)*PI);
  //-------------//
  
  //-----eye-----//
  ellipse(200,150,15,15);
  //---------------//
}

