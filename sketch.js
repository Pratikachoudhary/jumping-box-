 //MY CODE OF JUMPING BOX GAME;                                          // WHAT's MY CODE IS SHOWING;
var block1,block2,block3,block4;                                        //making variables;
var sqr;

function setup(){
createCanvas(600,600);                                                   //creating canvas and giving width and height;
sqr=createSprite(10,10,10,10);                                           //creating sqr and giving width, height and position(main sprite);
sqr.shapeColour="white";                                                 //giving colour to sqr (main sprite);
block1=createSprite(550,550,20,50);                                      //creating block1 and giving width,height,position;
block1.shapeColour="yellow";                                             //giving colour to block1;
block2=createSprite(550,550,20,50);                                      //creating block2 and giving width,height,position;
block2.shapeColour="red";                                                //giving colour to block2;
block3=createSprite(550,550,20,50);                                      //creating block3 and giving width,height,position;
block3.shapeColour="blue";                                               //giving colour to block3;
block4=createSprite(550,550,20,50);                                      //creating block4 and giving width,height,position;
block4.shapeColour="purple";                                             //giving colour to block4;
}

function draw(){
background="green";                                                      //background colour;

sqr.velocityX=Worldmouse.x;                                              //moving our main sprite with mouse.x;
sqr.velocityY=Worldmouse.y;                                              //moving our main sprite with mouse.x;
                            
isTouching();                                                            //function call;
drawSprites();
}

function isTouching(){                                                    // writing code to bounceoff sqr to all four box andchange colour;
 if(block1.isTouching(sqr) && sqr.bounceOff(block1)){
     sqr.shapeColour="yellow";
 }
 if(block2.isTouching(sqr)&& sqr.bounceOff(block2)){
    sqr.shapeColour="red";
}
if(block3.isTouching(sqr)&& sqr.bounceOff(block3)){
    sqr.shapeColour="blue";
}
if(block4.isTouching(sqr)&& sqr.bounceOff(block4)){
    sqr.shapeColour="purple";
} 
}