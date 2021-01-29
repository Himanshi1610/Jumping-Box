var canvas, edges;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(80,height-50, 180, 50);
    surface1.shapeColor="lightGreen";

    surface2 = createSprite(280,height-50, 180, 50);
    surface2.shapeColor="cyan";

    surface3 = createSprite(480,height-50, 180, 50);
    surface3.shapeColor="skyBlue";

    surface4 = createSprite(680,height-50, 180, 50);
    surface4.shapeColor="blue";


    //create box sprite and give velocity
    box = createSprite(random(20,750),0,50,50);
    box.shapeColor = "peach";
    box.velocityX = random(1,8);
    box.velocityY = random(1,8);

    //creating Edges
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(isTouching(box, surface1)){
        box.shapeColor = "lightGreen"
    }
    else if(isTouching(box, surface2)){
        box.shapeColor = "cyan"
        music.play();
    }
    else if(isTouching(box, surface3)){
        box.shapeColor = "skyBlue"
    }
    else if(isTouching(box, surface4)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "blue"
        music.stop();
    }

    box.bounceOff(edges);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    drawSprites();
}
