
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg,ground,stone,stoneImg,boy,boyImg,mango,mangoImg;
var gameState;

function preload(){
boyImg=loadImage("images/boy.png")	
}

function setup(){
    
    createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;


	tree = new Tree(1000,600,500,500);
	ground = new Ground(600,650,1200,20);
	stone = new Stone(400,200,100,100);
	//boy = new Boy(400,200,20,10);
	mango1 = new Mango(700,500,50,50);
	mango2 = new Mango(700,500,50,50);
	mango3 = new Mango(700,500,50,50);
	mango4 = new Mango(700,500,50,50);
	mango5 = new Mango(700,500,50,50);
	mango6 = new Mango(700,500,50,50);
	mango7 = new Mango(700,500,50,50);
	mango8 = new Mango(700,500,50,50);
	mango9 = new Mango(700,500,50,50);
    mango10 = new Mango(700,500,50,50);
    
    s1 = new SlingShot(mango1,{x:100,y:100})

    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  //boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  s1.display();

 /* detectcollision(stoneImg,mango1);
  detectcollision(stoneImg,mango2);
  detectcollision(stoneImg,mango3);
  detectcollision(stoneImg,mango4);
  detectcollision(stoneImg,mango5);
  detectcollision(stoneImg,mango6);
  detectcollision(stoneImg,mango7);
  detectcollision(stoneImg,mango8);
  detectcollision(stoneImg,mango9);
  detectcollision(stoneImg,mango10);*/
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

/*
function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.posotion
	stoneBodyPosition=lstone.body.posotion

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
    if(keyCode === 32){
	   Matter.Body.setPosition(stoneImg.body,{x:235,y:420});
	launcherObject.attach(stoneImg.body);
	}
}
*/