var buffer = "" // Temp content that you see up on the bar
var glob_buffer = ""; // Black hole of content nothing gets deleted from here. Only backspaced sometimes :)

AFRAME.registerComponent('tappable',{
    init: function () {
      this.handID =     /** @type {number} */            null;
      // this.el.addEventListener('mouseenter', this.click.bind(this));
      this.el.addEventListener('leap-tap', this.tap.bind(this));
    },
    tap:function(e){
      console.log("tap fired");
      this.originalColor = this.el.getAttribute('material').color;
      if(this.originalColor == 'white'){
        this.el.setAttribute('material', 'color', 'green');
        updateText(this.el.children[0].getAttribute('value'))
      }
      var self = this;
      setTimeout(function() {
          self.el.setAttribute('material', 'color', 'white');
        }, 500);
    }
  });
function updateText(text){
    buffer += text;
    document.getElementById("searchBar").children[0].setAttribute('value',buffer); 
}

AFRAME.registerComponent('fistable',{
    init: function () {
      this.handID =     /** @type {number} */            null;
      this.close = false;
      this.el.addEventListener('leap-fist', this.fist.bind(this));
    },
    fist:function(e){
      if(this.close == false){
        var keys = document.getElementById('searchBar');
        keys.setAttribute('visible',false);

        var keys = document.getElementById('mykeys');
        keys.setAttribute('visible',false);

        var keys = document.getElementById('backspace');
        keys.setAttribute('visible',false);

        var keys = document.getElementById('editor');
        keys.setAttribute('visible',true);

        this.close = true;
      }
      else{
        var keys = document.getElementById('searchBar');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('mykeys');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('backspace');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('editor');
        keys.setAttribute('visible',false);

        this.close = false;
      }
    }
});

AFRAME.registerComponent('swipable',{
  init: function () {
    this.handID =     /** @type {number} */            null;
    this.el.addEventListener('leap-swipe', this.swipeto.bind(this));
  },

  swipeto: function (e) {
    this.handID = e.detail.handID;
    if(buffer !== ""){
      console.log("Swipe fired : ",e.detail.swipeDirection);
      console.log(buffer);
      if(glob_buffer === "")
        glob_buffer += buffer;
      else  
        glob_buffer += " " + buffer;
      document.getElementById('editor').setAttribute('text',"value:" + glob_buffer + ";width: 2; color: black; lineHeight:100");
      console.log(glob_buffer);
      buffer = "";
      document.getElementById("searchBar").children[0].setAttribute('value',buffer);
    }
  }
});