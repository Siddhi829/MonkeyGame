var PLAY = 1;
var END = 0;
var gameState = PLAY

var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage,groundImage,gameOver,gameOverImage,
    restart,restartImage;
var FoodGroup, obstaclesGroup
var score

function preload(){
  
  groundImage=loadImage("ground.png");
 
  gameOverImage=loadImage("gameOver.png")
  restartImage=loadImage("restart.png")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  obstaclesGroup=createGroup();
 
   ground = createSprite(300,380,600,50);
  ground.addImage(groundImage);
  ground.x = ground.width /2;
 
 
  monkey = createSprite(50,300,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
 
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
 
  restart = createSprite(300,140);
  restart.addImage(restartImage);
 
 gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  //monkey.debug=true

  
}


function draw() {
  background(0);
   //text("Score: "+ score, 500,50);
 
  if(gameState === PLAY){
    gameOver.visible = false
    restart.visible = false
   
   ground.velocityX = -4;
   
  //  score = score + Math.round(getFrameRate()/60);
   
     if (ground.x < 0){
     ground.x = ground.width/2;
       
    }
    
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
   }
    //monkey.velocityY = monkey.velocityY + 0.8
    
    spawnObstacles();
  }

  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacles = createSprite(100,165,10,40);
   obstacles.addImage(obstacleImage);
   obstacles.velocityX = -6-score/100;
   obstacles.scale = 0.5;
    obstacles.lifetime = 300;
   
   
    //generate random obstacles
    //var rand = Math.round(random(1,6));         
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacles);
 }
}




