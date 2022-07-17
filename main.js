img = "";
status = "";
objects = [];

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup()
{
canvas = createCanvas(600, 400);
canvas.center();

object_detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded()
{
console.log("modeloaded");
status = true;
object_detector.detect(img, gotresults);
}

function gotresults(error, results)
{
if(error)
{
console.log(error);
}
console.log(results);
objects = results;
}

function draw()
{
image(img, 0, 0, 600, 400);

if(status != "")
{
for(i = 0; 1 < object.length; i++)
{
document.getElementById("status").innerHTML = "status: object detected.";
fill("red");
accuracy = floor(objects[i].confidance*100);
text(objects[i].label+ ""+ accuracy + "%", objects[i].x, objects[i].y);
noFill();
stroke("red");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
} 

}