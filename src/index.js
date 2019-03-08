export const Components = AFRAME.registerComponent('hexagon',{
    schema:{
        position :'0 0 -2',
        rotpos: {default:'rot0'},
        animation:{
            property: 'rotation',
            to:'0 -60 0',
            startEvents :'rot0', 
            repeat: '1'},
        animation__2:{
            property: 'rotation', 
            to:'0 -120 0',
            startEvents :'rot1', 
            repeat: '1'},
        animation__3:{
            property: 'rotation', 
            to:'0 -180 0',
            startEvents :'rot2', 
            repeat: '1'}, 
        animation__4:{
            property: 'rotation', 
            to:'0 -240 0',
            startEvents :'rot3', 
            repeat: '1'},
        animation__5:{
            property: 'rotation', 
            to:'0 -300 0',
            startEvents :'rot4', 
            repeat: '1'}, 
        animation__6:{
            property: 'rotation', 
            to:'0 0 0',
            startEvents :'rot5', 
            repeat: '1'}, 
    },
    init:function(){
        // We are going to try and add all the a-cards here
        // TODO: for now these are just boxed future implementation includes using a custom component called a-card
        cards = []
        for (var i=0;i<6;i++){
            cards.append(document.createElement('a-box'))
        }
    },
    full_body_carousel_right_move:function() {
        cards = this
        console.log("entering this function")
        if (lastrot == "none") {
          cards.emit("rot0");
          lastrot = "rot0";
        } else {
          console.log()
          lastrot = "rot" + (String((Number(lastrot[3]) + 1) % 6));
          console.log(lastrot)
          cards.emit(lastrot);
        }
      }
});