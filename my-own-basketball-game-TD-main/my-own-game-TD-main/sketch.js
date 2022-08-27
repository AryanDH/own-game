var player1Img,basketball,basketballCourt,player2Img

function preload(){
 player1Img=loadImage("Images/Player1.png")
 player2Img=loadImage("Images/Player2.png")
 basketball=loadImage("Images/Basketball.png")
 basketballCourt=loadImage("Images/basketball court.jpg")
}

function setup(){
  createCanvas(1500,900)
  


 
}

function draw(){
  background(basketballCourt);
 
  
drawSprites()
}
