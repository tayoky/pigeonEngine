function Calcul(){
    //initialistion
    var CalculVertex;
    CalculVertex=Vertex;

    //offset
    for(i=0;i<CalculVertex.length;i++){
        CalculVertex[i]=[
            CalculVertex[i][0] - Camera[0],
            CalculVertex[i][1] - Camera[1],
            CalculVertex[i][2] - Camera[2]
        ]
    }

    //perspective
    PlanVertex = [];
    for(var Ver in CalculVertex){
        PlanVertex.push([
            Ver[0] * field / Ver[2],
            Ver[1] * field / Ver[2]
        ]);
    }
}

function Draw(){
    for(var Ver in PlanVertex){
        canvas2D.FillRect(Ver[0],Ver[1],4,4);
    }
}

function FreeCam(CamSpeed){
    
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
//Camera
    var FOV =60;
    var FPS = 30;
    var Camera = [0,0,-1];
//mesh
    var Vertex=[]; //3Dvertex
//for the engine
    var field;
    var PlanVertex=[]//2D vertex
    var canvas =document.getElementById("Can");
    var canvas2D = canvas.getContext("2D")
//end

//demo
AddPrimitive("cube",0,0,0,1);

//frame
setInterval(Calcul(),1000/FPS);
setInterval(Draw(),1000/FPS);



