//var mic
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  //mic= new p5.AudioIn();
  //mic.start();
}

function draw() {
  //background(220);
  textSize(40)
  text("x:"+mouseX+" Y:"+mouseY,50,50)
 // var micLevel=mic.getLevel();
 // console.log(micLevel)
  push() //push依照下面的translate將圓心改到中間，pop後就恢復圓心到0,0

  translate(width/2,height/2)
  ellipse(0,0,400)
  ellipse(0,0,100,50)
  ellipse(-25,0,20) //左鼻孔
  ellipse(25,0,20) //右鼻孔

  ellipse(-75,-100,60) //左眼
  ellipse(75,-100,60) //右眼

  fill(0)
  ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),30) //左眼珠
  ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),30)//右眼珠

  if(mouseIsPressed) //滑鼠被按下
  {
    fill(255,0,0) //最外面大弧度
    arc(0,75,200,150,0,180) //arc弧度(座標，寬，弧度PI)，PI是三角函數 90度是1/2Pi
  }
  else{
  fill(255,0,0)
  arc(0,75,200,75,0,180)
  }
//arc(0,75,200,75+micLevel*1000,0,180)

 fill(255)
 arc(0,74,200,50,0,180)
pop()
}


//ellipse(width/2,height/2,400)
 // ellipse(width/2,height/2,100,50)
 // ellipse(width/2-25,height/2,20) //左鼻孔
 // ellipse(width/2+25,height/2,20) //右鼻孔

 // ellipse(width/2-75,height/2-100,60)
 // ellipse(width/2+75,height/2-100,60)

  //fill(0)
  //ellipse(width/2-75+map(mouseX,0,width,-20,20),height/2-100+map(mouseY,0,height,-20,20),20) //左眼珠
  //ellipse(width/2+75,height/2-100,20)
  //fill(255)