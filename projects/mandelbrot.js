function checkIfBelongsToMandelbrotSet(x, y) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;
    for(var i = 0; i < 20; i++) {
        // Calculate the real and imaginary components of the result
        // separately
        var tempRealComponent = realComponentOfResult * realComponentOfResult
                                - imaginaryComponentOfResult * imaginaryComponentOfResult
                                + x;

        var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                                + y;

        realComponentOfResult = tempRealComponent;
        imaginaryComponentOfResult = tempImaginaryComponent;
    }

    if (realComponentOfResult * imaginaryComponentOfResult < 5)
        return true; // In the Mandelbrot set

    return false; // Not in the set
}

var panX = 1;
var panY = 0.33;

var myCanvas = document.getElementById("canvas");
    myCanvas.width=1000;
    myCanvas.height=1000;
    // myCanvas.style.border = '5px solid #FFFFFF';
    document.body.appendChild(myCanvas);
    var ctx = myCanvas.getContext("2d");


mag = 0;
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for(var x=0; x < myCanvas.width; x++) {
        for(var y=0; y < myCanvas.height; y++) {
            var belongsToSet = 
                 checkIfBelongsToMandelbrotSet(x/mag - panX, 
                                               y/mag - panY);
            if(belongsToSet) {
                 ctx.fillStyle = "#123C69";
                 ctx.fillRect(x,y, 1,1); // 
            }                
        } 
     }
    mag = mag + 1000;
}

animate();