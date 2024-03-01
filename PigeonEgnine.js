function Calcul(){
    //initialistion
    var CalculVertex;
    CalculVertex=Vertex;

    //perspective
    PlanVertex = [];
    for(var Ver in CalculVertex){
        PlanVertex.push([
            Ver[0] * field / Ver[2],
            Ver[1] * field / Ver[2]
        ]);
    }
}

function AddPrimitive(name,x,y,z,size){
    if(name=="cube"){
        size *= 0.5
        //add vthe vertex/ponit of the cube
        Vertex.push(
            [x-size,y-size,z-size]
            [x-size,y-size,z+size]
            [x-size,y+size,z-size]
            [x-size,y+size,z+size]
            [x+size,y-size,z-size]
            [x+size,y-size,z+size]
            [x+size,y+size,z-size]
            [x+size,y+size,z+size]);

    }
}
//input
var FOV =60;
var field ;
var Vertex=[]; //3Dvertex


var PlanVertex=[]//2D vertex
var canvas =document.getElementById("3D");



