

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
let Vertex=[];
