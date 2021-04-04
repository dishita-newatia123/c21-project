var bullet,bulletSpeed,bulletWeight;
var wall,thickness,damage;


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90); 
 

  weight= random(400,1500);

  bullet=createSprite(50,200,20,10);
  bullet.shapeColor="white"
  wall = createSprite(1200,200,thickness,(height/2));
  wall.shapeColor=(80,80,80);

  bullet.velocityX = speed
  thickness=random(22,83);
  bulletSpeed=random(223,321)
  bulletWeight=random(30,52)





}

function draw() {
  background("black");  

 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
  }

  if(damage<=10){
    wall.shapeColor="green"
  }

  if(damage>=10){
    wall.shapeColor="red"
  }

  
  


  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true; 
  }
  else{
    return false; 
  }

}