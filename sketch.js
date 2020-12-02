
var bullet,wall,thickness,weight,speed;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
	    bullet=createSprite(50, 200, 50,5);  
	    bullet.velocityX = speed;
	    bullet.shapeColor="white";
	    
	    wall=createSprite(1200, 200, thickness, height/2);  
	    wall.shapeColor="grey";
	}

	function draw() {
	  background(0);  
	  //If it is collided calculating the damage and changes color of the wall
	  if(hasCollided(bullet, wall))
	  {
	  	bullet.velocityX=0;
	  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
		if(damage>10)
		{
			wall.shapeColor=color(255,0,0);
			
		}
		if(damage<10)
		{
			wall.shapeColor=color(0,255,0);
		}	
	  }
	  drawSprites(); 
	}
	//Detecting collision using function with arguments
	function hasCollided(bullet1, wall1)
	{
		bulletRightEdge=bullet1.x +bullet1.width;
		wallLeftEdge=wall1.x;
		if (bulletRightEdge>=wallLeftEdge)
		{
			return true
		}
		return false;
	}	  
