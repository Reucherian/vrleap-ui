export const cards = AFRAME.registerComponent('cards', {
    // This is basically a copy of the gemoetry of a box and there really is no difference other than our modified default for depth height and width
        schema: {
          color: {default:"red"},
          depth: {default: 0.01, min: 0},
          height: {default: 3, min: 0},
          width: {default: 3.75, min: 0},
          segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},
          segmentsWidth: {default: 1, min: 1, max: 20, type: 'int'},
          segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'},
          position: {
            type: 'vec3',
            default: {
              x: 0,
              y: 0,
              z: 0,
            }
          }
        },

        init: function () {
            var material = new THREE.LineBasicMaterial({
            color: this.data.color
            });
            var geometry = new THREE.BoxGeometry(
            this.data.width, this.data.height, this.data.depth, this.data.segmentsWidth, this.data.segmentsHeight, this.data.segmentsDepth);
            this.el.setObject3D('card',new THREE.Mesh(geometry,material))
        }
    });