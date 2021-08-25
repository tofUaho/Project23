const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

  playerBase = new PlayerBase(700, random(450, height - 300), 180, 150);
  player = new Player(700, playerBase.body.position.y - 153, 50, 180);

  computerBase = new ComputerBase(1300, random(450, height-300), 180, 150);
  computerPlayer = new ComputerPlayer(1300, computerBase.body.position.y - 153, 50, 180);
 }

function draw() {

  background("#00FFFF");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 

  playerBase.display();
  player.display();

  computerBase.display();
  computerPlayer.display();

  //display Player and computerplayer


}
