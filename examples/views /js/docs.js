function docs(){
    console.log("docs called");
    var body = document.getElementById('p');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    var keyboard = document.createElement('a-entity');
    keyboard.setAttribute('keyboard','');
    body.appendChild(keyboard);

    var scene = document.querySelector('a-scene');

    var e = document.createElement('a-entity');
    e.setAttribute('position','0.3 2.3 -2');
    e.setAttribute('text',"value:" + glob_buffer + ";width: 2; color: black; lineHeight:100");
    e.setAttribute('visible',false);
    e.setAttribute('id',"editor");
    // console.log(document.body.querySelector('a-scene'))
    document.body.querySelector('a-scene').appendChild(e);

    var backSpaceKey = document.createElement('a-entity');
    backSpaceKey.setAttribute('geometry',{ primitive:'box', height:0.02, width:0.3, depth: 0.01 });
    backSpaceKey.setAttribute('position', "0.16 1.760 -0.25");
    backSpaceKey.setAttribute('material', {opacity:0.5,  color:'#A9A9A9'});
    backSpaceKey.setAttribute('id', 'glob_backspace')
    backSpaceKey.setAttribute('tappable', '');
    backSpaceKey.setAttribute('class', 'tappable');
    backSpaceKey.setAttribute('visible', false);
    var keyTextElement = document.createElement('a-text');
    keyTextElement.setAttribute('scale',"0.1 0.1 0.1");
    keyTextElement.setAttribute('rotation',"0 0 0");
    keyTextElement.setAttribute('value',"Backspace");
    keyTextElement.setAttribute('color','#68696b');
    keyTextElement.setAttribute('position',"-0.08 0 0.006");

    backSpaceKey.appendChild(keyTextElement);
    document.body.querySelector('a-scene').appendChild(backSpaceKey);

    document.body.querySelector('a-scene').setAttribute('fistable','');
    document.body.querySelector('a-scene').setAttribute('swipable','');
}
var buffer = "" // Temp content that you see up on the bar
var glob_buffer = ""; // Black hole of content nothing gets deleted from here. Only backspaced sometimes :)

var viewMode = false;
function updateText(text){
    if(text === "Backspace"){
      if(buffer != ""){
        buffer = buffer.slice(0, -1);
      }
      if(viewMode){
        if(glob_buffer != ""){
          glob_buffer = glob_buffer.slice(0, -1);
          document.getElementById('editor').setAttribute('text',"value:" + glob_buffer + ";width: 2; color: black; lineHeight:100");
        }
      }
    }
    else
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
        keys.setAttribute('position', "0 0.5 -0.3");
        // keys.setAttribute('visible',false);

        var keys = document.getElementById('backspace');
        keys.setAttribute('visible',false);

        var keys = document.getElementById('editor');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('glob_backspace');
        keys.setAttribute('visible',true);

        viewMode = true;
        this.close = true;
      }
      else{
        var keys = document.getElementById('searchBar');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('mykeys');
        keys.setAttribute('position', "0 1.3 -0.3");
        //keys.setAttribute('visible',true);

        var keys = document.getElementById('backspace');
        keys.setAttribute('visible',true);

        var keys = document.getElementById('editor');
        keys.setAttribute('visible',false);

        var keys = document.getElementById('glob_backspace');
        keys.setAttribute('visible',false);

        viewMode = false;
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