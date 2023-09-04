objs=[]
function setup(){

canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380)
video.hide()
objectDetector=ml5.objectDetector("cocossd",modelloaded);

}
var status="";

function modelloaded(){
    console.log("READY");
    status=true;
    document.getElementById("status").innerHTML="status:finding stuff"
    objectDetector.detect(video,eee)
}
function eee(error,results){
 if(error){   console.log(error)
 }
else{
    console.log(results)
    objs=results
}
}
var img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
if(status=false){
    var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}
}
else{
function pauseAudio() {
  x.pause();
}
}
function draw(){
    image(video,0,0,380,380);
   if(status!=""){
    r=random(255)
    g=random(255)
    b=random(255)
    for(i=0;i<objs.length;i++){
        fill(r,g,b);
        document.getElementById("status").innerHTML="status:found"
        document.getElementById("numobj").innerHTML="number of things found :  "+objs.length;
        var percent=floor(objs[i].confidence*100);
        text(objs[i].label+" "+percent+"%",objs[i].x+15,objs[i].y+15);
        noFill();
        stroke(r,b,g);
        rect(objs[i].x,objs[i].y,objs[i].width,objs[i].height);

                }
   }

}