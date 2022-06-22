img="";
status="";
objects=[];

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    document.getElementById("status").innerHTML="Status: Detecting objects";
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
    
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<results.length;i++){
            document.getElementById("status").innerHTML="Status:object Detected";
            fill('#FF0000');
            percent=Math.floor(results[i].confidence*100);
            text(resultss[i].label+" "+percent+"%",resultss[i].x,resultss[i].y);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects=results;
    }
}