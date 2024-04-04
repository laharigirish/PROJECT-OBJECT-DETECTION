img=""
status="";
objects=[];

function preload(){
img= loadImage("bedroom.jpg");
}

function setup(){
    canvas= createCanvas(640, 480);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function draw(){
    image(img, 0, 0, 680, 480);
    
    if(status !=""){
        for(i=0; i,objects.length; i++){
    document.getElementById("status").innerHTML="Status: Object Detected";
        fill("#FF0000");
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x+ 15, objects[i].y-15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);

        }
    }

}

function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(img, gotResult);

}
 function gotResult(error, results){
if(error){
    console.log(error);

}
else{
    console.log(results);
    objects=results;
}
 }