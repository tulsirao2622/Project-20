var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg= loadImage ("images/bg.png")
    catimg1= loadAnimation("images/cat1.png");
    mouseimg1= loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2= loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(2000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,600)
    cat.addAnimation("catsitting", catimg1)
    cat.scale=0.2

    mouse=createSprite(200,600)
    mouse.addAnimation("mouseStanding",mouseimg1)
    mouse.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x=mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catLastImage", catimg2)
        
        cat.x=300
        cat.scale=0.2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay=25

      cat.velocityX= -5
  }


}
