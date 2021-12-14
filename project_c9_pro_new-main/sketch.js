
function setup() {
  createCanvas(400,400);
  background(51);
  carinha = createSprite(200,200,30,30);

}
// ESPERO QUE GOSTE PROFESSORA!! :) EU FIZ UMAS COISAS A +...
function draw() {
  background("red");

  if(keyDown("right"))
    {
    carinha.x = carinha.x + 2;    
    background("cyan");
    }

  if(keyDown("down"))     
    {  
    carinha.y = carinha.y + 2;     
    background("yellow");
    }   

  if(keyDown("left"))   
    {
    carinha.x = carinha.x - 2;
    background("blue");
    }

  if(keyDown("up"))   
    {
    carinha.y = carinha.y - 2; 
    background("green");
    }
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  

 // if (keyIsDown(LEFT_ARROW)) 
  //{
 //   background("blue");
    
 // }
 
  //  if (keyIsDown(UP_ARROW)) 
 // {
   // background("yellow");
   
  //}

  //if (keyIsDown(DOWN_ARROW)) 
 // {
   // background("green");
  //}


  
  drawSprites();
    }
    
  