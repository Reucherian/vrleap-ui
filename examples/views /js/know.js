function know(){
    // TODO : @roshni
    app = "know";
    console.log("know called");
    var body = document.getElementById('p');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    var keyboard = document.createElement('a-entity');
    keyboard.setAttribute('keyboard','');
    body.appendChild(keyboard);

}