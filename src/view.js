export const view = AFRAME.registerComponent('view',{
    schema:{
        position :{default:'0 1.6 -2'},
        rotpos: {default:'rot0'},
        animation:{
            default:{
            property: 'rotation',
            to:'0 -60 0',
            startEvents :'rot0', 
            repeat: '1'}
        },
        animation__2:{
            default:{
            property: 'rotation', 
            to:'0 -120 0',
            startEvents :'rot1', 
            repeat: '1'}
        },
        animation__3:{
            default:{
            property: 'rotation', 
            to:'0 -180 0',
            startEvents :'rot2', 
            repeat: '1'}
        }, 
        animation__4:{
            default:{
            property: 'rotation', 
            to:'0 -240 0',
            startEvents :'rot3', 
            repeat: '1'}
        },
        animation__5:{
            default:{
            property: 'rotation', 
            to:'0 -300 0',
            startEvents :'rot4', 
            repeat: '1'}
        }, 
        animation__6:{
            default:{
            property: 'rotation', 
            to:'0 0 0',
            startEvents :'rot5', 
            repeat: '1'}
        } 
    },
    init:function(){
        // We are going to try and add all the a-cards here
        

    },
    full_body_carousel_right_move:function() {
        console.log("entering this function")
        if (lastrot == "none") {
          this.el.emit("rot0");
          lastrot = "rot0";
        } else {
          console.log()
          lastrot = "rot" + (String((Number(lastrot[3]) + 1) % 6));
          console.log(lastrot)
          this.el.emit(lastrot);
        }
      }
      
});
