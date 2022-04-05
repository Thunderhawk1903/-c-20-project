var bg, bgImg;
var cat, mouse;
var cat2Img, mouse2Img; 
var cat1Img, mouse1Img;
var canvas;
 
function preload() {
   bgImg=loadImage("garden.png");
   cat1Img=loadAnimation("cat1.png");
   mouse1Img=loadAnimation("mouse1.png")
cat2Img=loadAnimation("cat2.png","cat3.png")
mouse2Img=loadAnimation("mouse2.png","mouse3.png")
catImg3=loadImage("cat3.png");
}

function setup(){
    canvas=createCanvas(1000, 800);
 
    cat=createSprite(800,600);
  cat.addAnimation("cat1",cat1Img);
  cat.scale=0.1;
 
  mouse=createSprite(200,600) 
 mouse.addAnimation("mouse1",mouse1Img);
mouse.scale=0.1;
}

function draw() {
    background(bgImg);
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX=0;
cat.addAnimation("catlastimage",catImg3);
cat.changeAnimation("catlastimage");
cat.x=300;
cat.scale=0.2;;    


    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  cat.velocityX=-10;

mouse.addAnimation("mouseteasing",mouse2Img);
mouse.changeAnimation("mouseteasing");
mouse.frameDelay = 25;


}

}
