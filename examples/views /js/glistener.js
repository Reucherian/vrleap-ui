AFRAME.registerComponent('tappable',{
    init: function(){
    this.el.addEventListener('leap-tap', this.tap.bind(this));
    },

    tap: function(e){
    this.originalColor = this.el.getAttribute('material').color;
    console.log(this.originalColor);
    if(this.originalColor == 'white'){
        this.el.setAttribute('material', 'color', 'green');
        console.log(this.originalColor);
    }
        var self = this;
        setTimeout(function() {
            self.el.setAttribute('material', 'color', 'white');
            if(app == "main"){
                if(self.el.id && typeof window[self.el.id] === "function"){
                    eval(self.el.id)(); 
                    // Functions to be implemented
                    // 1. paint ✔
                    // 2. block ✔
                    // 3. know  ✔
                    // 4. docs  ✔
                }
            }
            else if(app == "docs"){
                console.log(app);
                updateText(self.el.children[0].getAttribute('value')); //  in docs.js
            }
            else if(app == "know"){
              console.log(app);
              if(self.el.children[0].getAttribute('value') != "Backspace"){
                // console.log(self.el.children[0].getAttribute('value'));
                buffer += self.el.children[0].getAttribute('value');
                // console.log(buffer);
                document.getElementById("searchBar").children[0].setAttribute('value',buffer);
              }
              else{
                buffer = buffer.substring(0, buffer.length - 1);
                document.getElementById("searchBar").children[0].setAttribute('value',buffer);
              }
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
      console.log(app);
      console.log(e.detail.swipeDirection);
      var ed = document.getElementById('editor');
      if(app == "docs" || (typeof(ed) != 'undefined' && ed != null)){
        app = "docs";
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
        if(e.detail.swipeDirection == "left"){
          document.querySelector('[view]').components.view.full_body_carousel_right_move();
        }
        else{
          document.querySelector('[view]').components.view.full_body_carousel_left_move();
        }
      }
      else if(app == "know"){
        // var searchBar = document.querySelector('#searchBar');
        // var text = searchBar.children[0];
        // var search = text.getAttribute('value');
        // var scene = this.el;
        // console.log(scene);
        // this.el.removeChild(document.querySelector('#backspace'))
        // this.el.removeChild(document.querySelector('#mykeys'))
        var keys = document.getElementById('searchBar');
        keys.setAttribute('visible', false);

        var keys = document.getElementById('mykeys');
        // keys.setAttribute('position', "0 0.5 -0.3");
        keys.setAttribute('visible',false);

        var keys = document.getElementById('backspace');
        keys.setAttribute('visible', false);

        const Http = new XMLHttpRequest();
        const url='http://api.duckduckgo.com/?q=' + buffer.toLowerCase() + "+wikipedia" + '&format=json';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
          if(e.target.readyState == 4 && e.target.status == 200){
            console.log(buffer);
            console.log("entered");
            var json = JSON.parse(e.target.responseText);
            if(json.AbstractText != ""){
              text = json.AbstractText;
              image = "../../assets/search/"+buffer.toLowerCase().replace(" ","") +".jpg";
              video = "../../assets/search/test.mp4";
              this.createSearchResultImages(this.el, image);
              this.createVideoElement(this.el,video);
            }
            else{
                text = "Invalid!"
            }     
            this.createSearchResult(this.el, text);    
          } 
        }
      }
    },

    createSearchResult : function(scene, text){
      var textCard = document.createElement('a-entity');
      textCard.setAttribute('card',{height:1.6, width:1.6, position: "-0.3 1.4 -1" });
      textCard.setAttribute('material', {opacity:0.5, color:'white'});
      
      var cardTextElement = document.createElement('a-text');
      cardTextElement.setAttribute('rotation',"0 0 0");
      cardTextElement.setAttribute('value',text);
      cardTextElement.setAttribute('color','#68696b');
      cardTextElement.setAttribute('position',"-0.5 0.3 0.3");
      cardTextElement.setAttribute('scale',"0.2 0.2 0.2");
      
      textCard.appendChild(cardTextElement);
      scene.appendChild(textCard);
    },

    createVideoElement(scene, videoUrl){
      var video = document.createElement('a-video');
      video.setAttribute('position', "1.5 1.2 -1")
      video.setAttribute('rotation', "0 -30 0");
      video.setAttribute('src', videoUrl);``
      scene.appendChild(video);

    },

    createSearchResultImages(scene, imageUrl){
      var image = document.createElement('a-entity');
      image.setAttribute('card',{height:1.6, width:1.6, src:imageUrl , position: "-3.0 1.2 -1"});
      image.setAttribute('rotation', "0 30 0");
      scene.appendChild(image);
    }
});

AFRAME.registerComponent('fistable', {
    init: function () {
        this.handID = /** @type {number} */ null;
        this.close = false;
        this.el.addEventListener('leap-fist', this.fist.bind(this));
    },
    fist: function (e) {
        if(app != "main" && e.detail.hand.type == "left"){
            // Go back to the main app.
            // TODO : @reuben
            app = "main";
            main();
        }
        if(app == "docs"){
            if (this.close == false) {
                var keys = document.getElementById('searchBar');
                keys.setAttribute('visible', false);
    
                var keys = document.getElementById('mykeys');
                keys.setAttribute('position', "0 0.5 -0.3");
                // keys.setAttribute('visible',false);
    
                var keys = document.getElementById('backspace');
                keys.setAttribute('visible', false);
    
                var keys = document.getElementById('editor');
                keys.setAttribute('visible', true);
    
                var keys = document.getElementById('glob_backspace');
                keys.setAttribute('visible', true);
    
                viewMode = true;
                this.close = true;
            } else {
                var keys = document.getElementById('searchBar');
                keys.setAttribute('visible', true);
    
                var keys = document.getElementById('mykeys');
                keys.setAttribute('position', "0 1.3 -0.3");
                //keys.setAttribute('visible',true);
    
                var keys = document.getElementById('backspace');
                keys.setAttribute('visible', true);
    
                var keys = document.getElementById('editor');
                keys.setAttribute('visible', false);
    
                var keys = document.getElementById('glob_backspace');
                keys.setAttribute('visible', false);
    
                viewMode = false;
                this.close = false;
            }
        }
        else if(app == "block"){
            console.log("in block");
            var boxes = document.querySelectorAll('[holdable]');
            for(var i=0; i<boxes.length; i++){
              if(boxes[i].body.world.gravity.y == 0){
                boxes[i].body.world.gravity.set(0,-9.8,0)
              }
              else{
                boxes[i].body.applyImpulse(
                /* impulse */        new CANNON.Vec3(0, 0.1, 0),
                /* world position */ boxes[i].body.position
                );
                console.log(boxes[i].body.world.gravity.set(0,0,0));
              }
            }
            this.handID = e.detail.handID;
        }
        },
      });

AFRAME.registerComponent('holdable', {
    schema: {activeColor: {default: 'orange'}},

    init: function () {
      this.physics =    /** @type {AFRAME.System}     */ this.el.sceneEl.systems.physics;
      this.constraint = /** @type {CANNON.Constraint} */ null;
      this.handID =     /** @type {number} */            null;
      this.el.addEventListener('leap-holdstart', this.onHoldStart.bind(this));
      this.el.addEventListener('leap-holdstop', this.onHoldStop.bind(this));
    },

    onHoldStart: function (e) {
      if (this.handID) return;

      this.originalColor = this.el.getAttribute('material').color;
      this.el.setAttribute('material', 'color', this.data.activeColor);
      this.constraint = new CANNON.LockConstraint(this.el.body, e.detail.body);
      this.physics.addConstraint(this.constraint);
      this.handID = e.detail.handID;
    },

    onHoldStop: function (e) {
      if (e.detail.handID !== this.handID) return;

      this.el.setAttribute('material', 'color', this.originalColor);
      this.physics.removeConstraint(this.constraint);
      this.constraint = null;
      this.handID = null;
    }
});   