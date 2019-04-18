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
        },
        src1:{default:''},
        src2:{default:''},
        src3:{default:''},
        src4:{default:''},
        src5:{default:''},
        src6:{default:''}
    },
    init:function(){
        // We are going to try and add all the a-cards here
        var card1 = this.el.childNodes[1]
        var card2 = this.el.childNodes[3]  
        var card3 = this.el.childNodes[5]
        var card4 = this.el.childNodes[7]
        var card5 = this.el.childNodes[9]
        var card6 = this.el.childNodes[11]
        console.log(this.data.src1)
        card1.setAttribute('card',{position: "0 0 -0.2",src:this.data.src1});
        card1.setAttribute('rotation',"0 0 0")
        card2.setAttribute('card',{position: "0.16875 0 -0.0974",src:this.data.src2});
        card2.setAttribute('rotation',"0 -60 0")
        card3.setAttribute('card',{position: "-0.16875 0 -0.0974",src:this.data.src3 });
        card3.setAttribute('rotation',"0 60 0")
        card4.setAttribute('card',{position: "0 0 0.2",src:this.data.src4});
        card4.setAttribute('rotation',"0 0 0")
        card5.setAttribute('card',{position: "0.16875 0 0.0974",src:this.data.src5});
        card5.setAttribute('rotation',"0 -120 0")
        card6.setAttribute('card',{position: "-0.16875 0 0.0974",src:this.data.src6});
        card6.setAttribute('rotation',"0 120 0")
        // this.el.appendChild(card1)
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
