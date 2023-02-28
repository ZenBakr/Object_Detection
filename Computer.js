img="";
status="";

function back()
{
    window.location="index.html";
}

function preload()
{
    img = loadImage('Computer.jpeg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    detection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}