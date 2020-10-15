let life = 1
let me;
let obstacle1 = [];
let obstacle2 = [];
let obstacle3 = [];
let time = 0

function setup(){
 createCanvas(400,400)
 me = new Avatar(width/2,height/2,4)

}

function draw(){
  background(10,260,97)
  me.drawMe();
  me.moveMe();
  if (frameCount % 60 == 0){
    time = time + 1
  }
  text(time,300,100)


  if (life <= 0) {
    fill("red")
    rect(0,0/2,400,400)
    textSize(32);
    fill("black")
    text('GAME OVER', 100,100)
    text('RELOAD TO',100,200)
    text('PLAY AGAIN',100,300)
  }

  if (frameCount > 0) {
    if (frameCount % 60 == 0) {
        let  f = new Obstacle1(random(0,400), 0, 1);
        obstacle1.push(f);
      }
    for (let i = 0; i < obstacle1.length; i++) {
    	    obstacle1[i].drawObstacle();
       	  obstacle1[i].moveObstacle();
        	obstacle1[i].damageMe();
      }
     if (frameCount < 0){
      return
    }
  }
  if (frameCount > 420) {
    if (frameCount % 240 == 0) {
      let b = new Obstacle2(0,random(20,330, 1));
      obstacle2.push(b);
    }
    for (let i=0; i < obstacle2.length; i++) {
      obstacle2[i].drawObstacle2();
      obstacle2[i].moveObstacle2();
      obstacle2[i].damageMe2();
  }
     if (frameCount < 420){
     return
    }
}
if (frameCount > 1200){
  if (frameCount % 30 == 0) {
    let u = new Obstacle3(random(0,400),400, 1);
    obstacle3.push(u);
  }
  for (let i=0; i < obstacle3.length; i++) {
    obstacle3[i].drawObstacle3();
    obstacle3[i].moveObstacle3();
    obstacle3[i].damageMe3();
  }
  if (frameCount < 1200){
  return
  }
}
}
class Avatar {
  constructor(x, y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  }

  drawMe(){
  strokeWeight(1)
  fill("purple")
  ellipse(this.x,this.y,10,10);
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)) {
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
    }
  }
}
class Obstacle1 {
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed
  }
  drawObstacle() {
    strokeWeight(1);
    fill("red")
    ellipse(this.x,this.y,20,20)
  }
  moveObstacle(x,y) {
    this.x = this.x
    this.y = this.y+2
  }
  damageMe(){
    if (this.x >= me.x-14 && this.x <= me.x+14 && this.y+14 > me.y && this.y-14 < me.y){
      life = life-1
    }
  }
}
class Obstacle2 {
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }
  drawObstacle2(){
    strokeWeight(1);
    fill("red")
    rect(this.x,this.y,40,40)
  }
  moveObstacle2(x,y){
    this.x = this.x+3
    this.y = this.y
  }
  damageMe2() {
    if(this.x >= me.x-20 && this.x <= me.x+20 && this.y > me.y-40 && this.y < me.y+20){
      life = life-1
    }
  }
}
class Obstacle3 {
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }
  drawObstacle3(){
    strokeWeight(1);
    fill("red")
    ellipse(this.x,this.y,10,5)
  }
   moveObstacle3(x,y){
     this.x = this.x
     this.y = this.y - 6
   }
   damageMe3() {
     if(this.x >= me.x-5 && this.x <= me.x+5 && this.y >= me.y-2.5 && this.y <= me.y+2.5){
       life = life-1
     }
   }
}
