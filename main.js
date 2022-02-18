function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    tint.color = "";
}

function draw() {
    circle(video, 0, 0, 640, 480);
    tint(tint_color);
}
function filterTint() {
    tint_color = document.getElementById("color_name").value;
}