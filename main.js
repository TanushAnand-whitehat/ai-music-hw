sound = "" ;
song = "";
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