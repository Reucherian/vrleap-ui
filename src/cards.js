const cards = AFRAME.registerComponent('cards', {
    // This is basically a copy of the gemoetry of a box and there really is no difference other than our modified default for depth height and width
        schema: {
          depth: {default: 0.01, min: 0},
          height: {default: 3, min: 0},
          width: {default: 3.75, min: 0},
          segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},
          segmentsWidth: {default: 1, min: 1, max: 20, type: 'int'},
          segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'}
        },
        init: function (data) {
          this.geometry = new THREE.BoxGeometry(
            data.width, data.height, data.depth, data.segmentsWidth, data.segmentsHeight, data.segmentsDepth);
        }
    });
export {cards}