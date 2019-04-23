AFRAME.registerComponent('tappable',{
    init: function(){
    this.el.addEventListener('leap-tap', this.tap.bind(this));
    },

    tap: function(e){
    this.originalColor = this.el.getAttribute('material').color;
    if(this.originalColor == '#FFF')
        this.el.setAttribute('material', 'color', 'green');
        var self = this;
        setTimeout(function() {
            self.el.setAttribute('material', 'color', '#FFF');
            if(app == "main"){
                if(self.el.id && typeof window[self.el.id] === "function"){
                    eval(self.el.id)(); 
                    // Functions to be implemented
                    // 1. paint
                    // 2. block
                    // 3. know
                    // 4. docs
                }
            }
            else if(app == "docs"){
                updateText(self.el.children[0].getAttribute('value')); //  in docs.js
            }
        }, 500);
    }    
});

AFRAME.registerComponent('swipable',{
    init: function () {
      this.handID =     /** @type {number} */            null;
      this.el.addEventListener('leap-swipe', this.swipeto.bind(this));
    },
  
    swipeto: function (e) {
      this.handID = e.detail.handID;
      
      if(app == "docs"){
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
      else if(app == "main"){
        console.log("Swipe fired : ",e.detail.swipeDirection); 
        console.log("Carasoul move");
      }
    }
  });