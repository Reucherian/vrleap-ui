const card_component = AFRAME.registerComponent('card', {
  // This is basically a copy of the gemoetry of a box and there really is no difference other than our modified default for depth height and width
      schema: {
        depth: {default: 0.01, min: 0},
        height: {default: 0.3, min: 0},
        width: {default: 0.2, min: 0},
        color: {default:'white'},
        position:{ type:'vec3',
          default:{
          x:0,
          y:1.6,
          z:-0.2
          }
        },
        src:{default:'/assets/rounded_edges.png'}
      },
      init: function () {
        this.el.setAttribute('geometry',{
          primitive:'box',
          height:this.data.height,
          width:this.data.width,
          depth:this.data.depth
        });
        this.el.setAttribute('material',{
          transparent:'true',
          color:this.data.color,
          src:this.data.src,
        });
        console.log(this.data.position)
        this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z);
        this.el.setAttribute('shadow',{cast:true, receive:true});
      }
  });

const card_primitive = AFRAME.registerPrimitive('a-card',{
    defaultComponents:{
      card: {}
    },
    mappings:{
      position: 'card.position',
      height: 'card.height',
      width: 'card.width',
      color: 'card.color',
    }
});
export {card_component, card_primitive}