const image_button_component = AFRAME.registerComponent('image_button',{
    schema:{
        color:{default:'white'},
        src:{default:'/assets/start.png'},
        radius:{default:0.02, min:0},
        height:{default:0.0025},
        position:{type:'vec3',
            default:{
            x:0.055,
            y:0.067,
            z:0.0175
            }
          },
        rotation:{
            default:{
                x:90,
                y:0,
                z:0,
            }
        }
    },
    init:function(){
    this.el.setAttribute('geometry',{
        primitive:'cylinder',
        height:this.data.height,
        radius:this.data.radius
    });
    this.el.setAttribute('material',{
        src:this.data.src,
        color:this.data.color,
    });
    this.el.setAttribute('rotation',{
        x:this.data.rotation.x,
        y:this.data.rotation.y,
        z:this.data.rotation.z
    })
    this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z);
    this.el.setAttribute('shadow',{cast:true, receive:true});
    }
});
const image_button_primitive = AFRAME.registerPrimitive('a-imagebutton',{
    defaultComponents:{
      image_button: {}
    },
    mappings:{
      src:'image_button.src',
      color:'image_button.color',
      radius:'image_button.radius',
      height:'image_button.height',
      position:'image_button.position',
      rotation:'image_button.rotation'
    }
  })

  export {image_button_primitive,image_button_component}