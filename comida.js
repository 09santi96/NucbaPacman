function Comida(x,y){
    this.x = x;
    this.y = y;
    this.radius = 9.5;

    this.show = function(){
        image(comidaImg,this.x,this.y);
    }
}
