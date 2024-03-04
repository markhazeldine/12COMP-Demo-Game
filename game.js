/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 600;
const SCREEN_HIEGHT = 400;
const PLAYER_WIDTH = 30;
const PLAYER_HIEGHT = 30;
const BLOCK_WIDTH_MIN = 20;
const BLOCK_HIEGHT_MIN = 50;
const BLOCK_WIDTH_MAX = 80;
const BLOCK_HIEGHT_MAX = 120;
var blocks;
var nextSpawn = 0;
var score = 0;
var screenSelector = "start";  
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
      cnv = new Canvas(SCREEN_WIDTH, SCREEN_HIEGHT);
      console.log("setup: ");
      
      block = new Sprite(SCREEN_WIDTH+100, 360, random(BLOCK_WIDTH_MIN, BLOCK_WIDTH_MAX), random(BLOCK_HIEGHT_MIN, BLOCK_HIEGHT_MAX), 'k');
      block.color = 'yellow';
      floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HIEGHT, SCREEN_WIDTH+200, 5, 's');
      floor.color = ("black")
      world.gravity.y=75;
      
      block.bounciness = 0;
      floor.bounciness = 0;
      block.vel.x = -10;

       document.addEventListener("keydown", event) 
         function event(event) {
             if(screenSelector == "start"||screenSelector == "end"){
                screenSelector = "game" 
                resetGame();
            }else{ 
                if(player.y > 380)
                player.vel.y = -22;
                console.log(player.y);
                
        };
     
}
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
     if(screenSelector=="game"){
        gameScreen();
     }else if(screenSelector=="end"){
        endScreen();
     }else if(screenSelector=="start"){
        startScreen();
     }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
     }
}

function youDied(_player, _obstacle){
    console.log("YouDied")
    screenSelector = "end"
    player.remove();
}
// Main screen functions

function startScreen(){
    console.log("Start screen")
    background("white");
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to Geometry Dash", 50, 50);
    text("press any key to start", 50, 130);
}

function gameScreen(){
     allSprites.visible = true;
     score++;
     background("grey");
     if(frameCount> nextSpawn){
        newBlock();
        nextSpawn = frameCount + random(10,100);
     }
     textSize(32);
     fill(255);
     stroke(0);
     strokeWeight(4);
     text(score, 50, 50);
     player.collides(block, youDied);

}
function newBlock(){
    block = new Sprite(SCREEN_WIDTH+100,  SCREEN_HIEGHT, random(BLOCK_WIDTH_MIN, BLOCK_WIDTH_MAX), random(BLOCK_HIEGHT_MIN, BLOCK_HIEGHT_MAX), 'k');
    block.color = color("yellow");
    block.vel.x = -10;
}

function endScreen(){
    console.log("End screen")
    background("white");
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    text("press any key to restart", 50, 150);
}

function resetGame(){
    player = new Sprite(PLAYER_WIDTH*2, SCREEN_HIEGHT/2, PLAYER_WIDTH, PLAYER_HIEGHT, 'd');
    player.color = 'blue';
    player.collides(block, youDied);
    player.bounciness = 0;
    score = 0;
}
/*******************************************************/
//  END OF APP
/*******************************************************/
