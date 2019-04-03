export const card = AFRAME.registerComponent('card', {
    // This is basically a copy of the gemoetry of a box and there really is no difference other than our modified default for depth height and width
        schema: {
          depth: {default: 0.01, min: 0},
          height: {default: 0.3, min: 0},
          width: {default: 0.2, min: 0},
          color: {default:'white'},
          position:{
            default:{
            x:0,
            y:0,
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
          this.el.object3D.position.set(this.data.position.x,this.data.position.y,this.data.position.z);
        }
    });