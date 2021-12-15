function Roca(x,y){
    this.x = x;
    this.y = y;
    this.radius = 9.5;

    this.show = function(){
        image(rocaImg,x,y);
    }
}
