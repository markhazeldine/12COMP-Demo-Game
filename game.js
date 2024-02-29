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
const BLOCK_WIDTH = 70;
const BLOCK_HIEGHT = 70;
var blocks;
var nextSpawn = 0;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
      cnv = new Canvas(SCREEN_WIDTH, SCREEN_HIEGHT);
      console.log("setup: ");
      player = new Sprite(PLAYER_WIDTH*1.5, SCREEN_HIEGHT/2, PLAYER_WIDTH, PLAYER_HIEGHT, 'd');
      player.color = 'blue';
      block = new Sprite(SCREEN_WIDTH+100, SCREEN_HIEGHT-BLOCK_HIEGHT/2, BLOCK_WIDTH, BLOCK_HIEGHT, 'k');
      block.color = 'yellow';
      floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HIEGHT, SCREEN_WIDTH+200, 5, 's');
      floor.color = ("black")
      world.gravity.y=75;
      player.bounciness = 0;
      block.bounciness = 0;
      floor.bounciness = 0;
      block.vel.x = -10;

       document.addEventListener("keydown", 
            function(event) {
              if(player.y > 380)
                player.vel.y = -22;
                console.log(player.y);
        });
     player.collides(block, youDied);
     
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background("grey");
   if(frameCount> nextSpawn){
  newBlock();
    nextSpawn = frameCount + random(10,100);

  }
}
function newBlock(){
    block = new Sprite(SCREEN_WIDTH+100,  SCREEN_HIEGHT - BLOCK_HIEGHT/2, BLOCK_WIDTH, BLOCK_HIEGHT, 'k');
    block.color = color("yellow");
    block.vel.x = -10;
}
function youDied(_player, _obstacle){
    console.log("YouDied")
}
/*******************************************************/
//  END OF APP
/*******************************************************/
