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

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HIEGHT);
  console.log("setup: ");
  player = new Sprite(PLAYER_WIDTH*1.5, SCREEN_HIEGHT/2, PLAYER_WIDTH, PLAYER_HIEGHT, 'd');
  player.color = 'blue';
  floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HIEGHT, SCREEN_WIDTH, 5, 's');
  floor.color = ("black")
  world.gravity.y=75;
  player.bounciness = 0;
  floor.bounciness = 0;
   document.addEventListener("keydown", 
        function(event) {
          if(player.y > 380)
            player.vel.y = -22;
            console.log(player.y);
    });

}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background("grey");
  console.log(player.y);
}

/*******************************************************/
//  END OF APP
/*******************************************************/
