//var ball;
var pen
var database
var drawing=[]
var currentPath=[];
function setup(){
    createCanvas(400,400);
    database=firebase.database();
  // var penPosition=database.ref("pen/position")
   //penPosition.on("value",readPosition);
   canvas.mousePressed(start)
}

function draw(){
    background("lightpink");
    if(mouseIsPressed){
        // pen.x=mouseX;
        // pen.y=mouseY;
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point)
    //    stroke("blue")
    //    strokeWeight(4)
    //     point(mouseX,mouseY)
        
    }
//     //beginShape()
//     stroke(255)
  strokeWeight(4)
     noFill();
     stroke("green")
    for(var i=0;i<drawing.length;i++){
        var path=drawing[i]
    beginShape();
    for(var j=0;j<path.length;j++){
        vertex(path[j].x,path[j].y)
        }
    endShape();
}
// function readPosition(data){
//     point.x=position.x;
//     point.y=position.y;
// }
// function update(x,y){
//     database.ref("ball/position").set({
//         'x': position.x+x,
//         'y': position.y+y
//     })
// }
            function start(){
    currentPath=[];
    drawing.push(currentPath);
    }
}

