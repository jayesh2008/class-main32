const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hours;
var bg;
var bImage;

function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1400,900);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    if(bImage){
        background(bImage);
    }
    
    Engine.update(engine);
    getBackgroundImg();
    
    textSize(35);
    fill("black"); 
    text("time :" + hours,100,100);

}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var rjson = await response.json();
 
    var date = rjson.datetime;
    hours = date.slice(11,13);
    console.log(hours);
   
    if(hours > 04 && hours <= 05 ){
        bg = "sunrise1.png"
    }
    if(hours > 05 && hours <= 06 ){
        bg = "sunrise2.png"
    }
    if(hours > 06 && hours <= 07 ){
        bg = "sunrise3.png"
    }
    if(hours > 07 && hours <= 10 ){
        bg = "sunrise4.png"
    }
    if(hours > 10 && hours <= 13 ){
        bg = "sunrise5.png"
    }
    if(hours > 13 && hours <= 16 ){
        bg = "sunrise6.png"
    }
    if(hours > 16 && hours <= 17 ){
        bg = "sunset7.png"
    }
    if(hours > 17 && hours <= 18 ){
        bg = "sunset8.png"
    }
    if(hours > 18 && hours <= 19 ){
        bg = "sunset9.png"
    }
    if(hours > 19 && hours <= 21 ){
        bg = "sunset10.png"
    }
    if(hours > 21 && hours <= 04 ){
        bg = "sunset11.png"
    }

    bImage = loadImage(bg);

}
