var ball;
var position;
var database;
var ballPosition
var obstacle
var obstacleGroup
var obs1,obs2,obs3,obs4,obs5
var count=0
var score=0;
var lives=1;
var gameState='menu'

var live1
 var heartImg1,heartImg2,heartImg3
 var buttonImg
function preload(){

}
function setup(){
    heartImg1=loadImage("hearts-512.png")
    heartImg2=loadImage("hearts-512.png")
   heartImg3=loadImage("hearts-512.png")
   heartImg3=loadImage("hearts-512.png")
   buttonImg=loadImage("circle-cropped.png")
    createCanvas(displayWidth-700,displayWidth-700);
    ball = createSprite(250,200,10,10);
    ball.shapeColor = "red";
    live1=createSprite(20,00,10,10)
    live1.addImage("heart1",  heartImg1)
    live1.scale=0.05;
   //  live2=createSprite(50,00,10,10)
   //  live2.addImage("heart2",  heartImg2)
   //  live2.scale=0.05;
   //  live3=createSprite(80,00,10,10)
   //  live3.addImage("heart3",  heartImg3)
   //  live3.scale=0.05;
    obstacleGroup = createGroup();
    button=createSprite(300,300,100,20)
    button.addImage("button",   buttonImg)
    button.scale=0.5

    
}

function draw(){
    background("black");
         
          camera.position.y =  ball.y
      
         //textSize=25
        fill("white")
        text("score="+score,550,ball.y-240)
        
          if(mousePressedOver(button)){
             gameState='start'
             button.destroy();
          }
         text("stay away from white blocks",100,100)
         text("press left and right arrow key to move left and right",100,120)
       textSize(30)
       fill('blue')
         text("Protect The Ball",190,20)
        if(gameState==='start'){
         count=count-10
         score=score+2

        
        
        ball.y=  ball.y-5
        live1.y= live1.y-5
       
         spawnObstacles()

    if(keyDown('left')){
       ball.x=ball.x-6
    }
    if(keyDown('right')){
        ball.x=ball.x+6
     }
     if(obstacleGroup.isTouching(ball)){
     lives=lives-1;
     obstacleGroup.destroyEach();
     }
 
        }
     if(lives===0){
        live1.destroy();
        gameState='end'
       
     }
     if(gameState==="end"){
        textSize(40)

        fill("white")
        text("game over", ball.x,ball.y-200)
     }
   console.log(gameState)
      
    drawSprites();
}
function spawnObstacles(){
if (frameCount %1.5 === 0) {
    obstacle=createSprite(Math.round(random(20, 600)),count,60,10)
    obstacle.shapeColor='white'
obstacleGroup.add(obstacle);
    
}
}


