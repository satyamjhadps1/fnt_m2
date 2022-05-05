n_x = 0;
n_y = 0;
rwr_x= 0;
lwr_x= 0;
d_f = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(525, 550);
    video.position(10, 130);

    canvas = createCanvas(533, 425);
    canvas.position(730,200);
    poseNet = ml5.poseNet(video, mdl);
    poseNet.on('pose', gotPoses);
}

function mdl(){
    console.log("Posenet initialized")
}

function draw(){
    background('#808080');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}