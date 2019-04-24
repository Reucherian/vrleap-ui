AFRAME.registerComponent('carousel', {
    init: function () {
      console.log("this got called")
      document.onkeydown = checkKey;
      // this.el.addEventListener('loaded', (e) => {
      //   box.emit('first');
      //   console.log("starting here")
      // })
      function checkKey(e) {
        if (e.keyCode == '86') {
          // this is the c key
        document.querySelector('[view]').components.view.full_body_carousel_right_move();
          // full_body_carousel_right_move(cards)
        }
        if (e.keyCode == '67') {
          // this is the v key
        document.querySelector('[view]').components.view.full_body_carousel_left_move();
        }
      }
  }
});