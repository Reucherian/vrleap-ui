function paint(){
    // TODO : @pratik
    app = "paint";
    console.log("paint called");
    var body = document.getElementById('p');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    hand = document.querySelectorAll('[leap-hand]');
    hand[0].setAttribute('leap-hand','rawMode',true);
    hand[1].setAttribute('leap-hand','rawMode',true);

    var p = document.createElement('a-entity');
    p.setAttribute('id','paint');
    body.appendChild(p);
}
    