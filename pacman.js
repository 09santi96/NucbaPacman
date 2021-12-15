function Pacman(x,y){
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.direction = 0;
    this.radius = 9.5;
    //frameRate(11);

    this.show = function(){
        image(pacmanImg, this.x, this.y, 19, 19, 19*this.frame++ , 19*this.direction, 19, 19);
        this.frame = (this.frame === 7)?0:this.frame;
        
    }

    this.move = function(d){
        //1 = derecha / 1 = abajo / 2 = izquierda / 3 = arriba
        this.direction = d;
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
        if(this.x < 0)
        this.x = width - 19;
        if(this.x >= width)
        this.x = 0;
    }
    this.eat = function(comida){
        var dis = dist(this.x, this.y, comida.x, comida.y);
        return (dis < this.radius + comida.radius);    
    }

    this.colission = function(enemy) {//calculo de radio si colisiona con una pared
        var dis = dist(this.x, this.y, enemy.x, enemy.y);
        return (dis < this.radius + enemy.radius);    
    }

}