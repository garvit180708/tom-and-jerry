var tom,tom1,tom2,tom3
var jerry,jerry2,jerry1,jerry3
var jardin
function preload() {
    //load the images here
jardin = loadImage("images/garden.png")
tom1 = loadAnimation ("images/cat1.png")
tom2 = loadAnimation("images/cat2.png","images/cat3.png")
tom3 = loadAnimation("images/cat4.png")
jerry1 = loadAnimation ("images/mouse1.png")
jerry2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
jerry3 = loadAnimation ("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite (870,600,10,10)
tom.addAnimation("tomsleeping",tom1)
tom.scale = 0.2
jerry = createSprite (200,600,10,10)
jerry.addAnimation("jerrystanding",jerry1)
jerry.scale = 0.2

}

function draw() {

    background(jardin);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)){
tom.velocityX = 0
tom.addAnimation("tomcollides",tom3)
tom.changeAnimation("tomcollides")
jerry.addAnimation("jerrycollides",jerry3)
jerry.changeAnimation("jerrycollides")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -4
tom.addAnimation ("tomrunning",tom2)
tom.changeAnimation("tomrunning")
jerry.addAnimation("jerryDancing",jerry2)
jerry.changeAnimation("jerryDancing")
}

}
