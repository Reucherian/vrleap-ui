function block(){
    // TODO : @pratik - Done :)
    app = "block";
    console.log("block called");
    var body = document.getElementById('p');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    var box1 = document.createElement('a-box');
    box1.setAttribute('width','0.25');
    box1.setAttribute('height','0.25');
    box1.setAttribute('depth','0.25');
    box1.setAttribute('position','-0.125 1.73 -0.5');
    box1.setAttribute('color','red');
    box1.setAttribute('holdable','');
    box1.setAttribute('dynamic-body','shape: box');
    body.appendChild(box1);
    var box1 = document.createElement('a-box');
    box1.setAttribute('width','0.25');
    box1.setAttribute('height','0.25');
    box1.setAttribute('depth','0.25');
    box1.setAttribute('position','0.00 2.0 -0.5');
    box1.setAttribute('color','green');
    box1.setAttribute('holdable','');
    box1.setAttribute('dynamic-body','shape: box');
    body.appendChild(box1);
    var box1 = document.createElement('a-box');
    box1.setAttribute('width','0.25');
    box1.setAttribute('height','0.25');
    box1.setAttribute('depth','0.25');
    box1.setAttribute('position','0.125 1.73 -0.5');
    box1.setAttribute('color','blue');
    box1.setAttribute('holdable','');
    box1.setAttribute('dynamic-body','shape: box');
    body.appendChild(box1);

    var grid = document.createElement('a-grid');
    grid.setAttribute('src',"");
    grid.setAttribute('static-body',"");
    grid.setAttribute('position','0 1.4 0');
    body.appendChild(grid);
}