var dog, happyDog, database;
var foodS, foodStock, image, image1;

function preload()
{
  this.image = loadImage("images/dogImg.png");
  this.image1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database;
  console.log(database);
  
  createCanvas(500, 500);
  var dog = createSprite(50,100,2,2);
  dog.addImage("dog", this.image1);

  foodStock = database.ref(Food);
  foodStock.on("value",readStock);
  
}


function draw() {  
background("46, 139, 87");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("images/dogImg1.png");
}

  drawSprites();
  textSize(20);

  text("Note: Press UP_ARROW key to feed the dog milk!", 50,50);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('Food/x').update({
    Food:x
  })
}


