function Fantasma(x,y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.frame = 0;
    this.direction = 0;
    this.radius = 9.5;
    this.movement = true;
    this.isWeak = false;

    this.show = function(){
        if(this.isWeak === false){
            image(img, this.x, this.y, 19, 19, 0, 0 , 19, 19);
        }else{
            image(weak, this.x, this.y, 19, 19, 0, 0 , 19, 19)
        }
    }
    this.move = function(bricks){
        if(this.movement === false){
            let d = floor(random(4));
            this.direction = d;
        }
        let lastx = this.x;
        let lasty = this.y;
        
        if(this.direction === 0){
            this.x += 19;
        }
        if(this.direction === 1){
            this.y += 19;
        }
        if(this.direction === 2){
            this.x -= 19;
        }
        if(this.direction === 3){
            this.y -= 19;
        }
        
        for(let i = 0; i < bricks.length; i++){//accion si colisiona con una roca
            if(this.colission1(bricks[i])){
                this.x = lastx;
                this.y = lasty;
                this.movement = false;
                this.move(bricks);
            }
            else {
                this.movement = true;
            }
        }
       /* for(let i = 0; i < ghosts.length; i++){//accion si colisiona con otro fantasma
            if(this.colission2(ghosts[i])){
                this.x = lastx + 19;
                this.y = lasty;
                this.move(bricks,ghosts);
            }
        }*/
        if(this.x < 0)
        this.x = width - 19;
        if(this.x >= width)
        this.x = 0;
    }

    this.colission1 = function(roca) {//calculo de radio si colisiona con una pared
        var dis = dist(this.x, this.y, roca.x, roca.y);
        return (dis < this.radius + roca.radius);    
    }
   /* this.colission2 = function(fantasma) {//calculo de radio si colisiona con otro fantasma
        var dis = dist(this.x, this.y, fantasma.x, fantasma.y);
        return (dis < this.radius + this.radius);    //esta fallando el calculo del radio de colision
    }*/



    this.salir = function(p){
        for(let i = 0; i < 1; i++) //al salir el fantasma solo se movera una vez hacia arriba
            this.y -= 38;
    }
  

}