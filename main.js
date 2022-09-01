sound = "" ;
song = "";

rightWristx = 0;
rightWristy = 0;
leftWristx = 0;
leftWristy = 0;

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
    }   
}
function preload() {
    sound = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500); 
}