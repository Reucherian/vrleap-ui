export const keyboard = AFRAME.registerComponent('keyboard', {
  init: function () {
    var searchBar = document.createElement('a-entity');
    searchBar.setAttribute('geometry',{primitive:'box', height:0.08, width:1.5, depth: 0.02 });
    searchBar.setAttribute('id', "searchBar");
    searchBar.setAttribute('position',"-0.3 2.1 -1");
    searchBar.setAttribute('material', {opacity:0.5, color:'#A9A9A9'});

    var searchBarTextElement = document.createElement('a-text');
    searchBarTextElement.setAttribute('scale',"0.3 0.3 0.3");
    searchBarTextElement.setAttribute('rotation',"0 0 0");
    searchBarTextElement.setAttribute('value',"Test");
    searchBarTextElement.setAttribute('color','#68696b');
    searchBarTextElement.setAttribute('position',"-0.7 0 0");

    searchBar.appendChild(searchBarTextElement);
    this.el.parentNode.appendChild(searchBar);

    var backSpaceKey = document.createElement('a-entity');
    backSpaceKey.setAttribute('geometry',{ primitive:'box', height:0.08, width:0.5, depth: 0.02 });
    backSpaceKey.setAttribute('position', "0.75 2.1 -1");
    backSpaceKey.setAttribute('material', {opacity:0.5,  color:'#A9A9A9'});
    backSpaceKey.setAttribute('id', 'backspace')
    backSpaceKey.setAttribute('tappable', '');

      var keyTextElement = document.createElement('a-text');
      keyTextElement.setAttribute('scale',"0.3 0.3 0.3");
      keyTextElement.setAttribute('rotation',"0 0 0");
      keyTextElement.setAttribute('value',"<- Backspace");
      keyTextElement.setAttribute('color','#68696b');
      keyTextElement.setAttribute('position',"-0.2 0 0");

      backSpaceKey.appendChild(keyTextElement);

      this.el.parentNode.appendChild(backSpaceKey);

    //Keyboard Base  
    var plane = document.createElement('a-entity');
    plane.setAttribute('geometry',{primitive:'cylinder', height: 1.2, radius: 0.87, segmentsRadial: 48, thetaLength: -180, openEnded: true });
    plane.setAttribute('material',{color: "#A9A9A9", transparent: false });
    plane.setAttribute('rotation'," 0 -90 0");
    plane.setAttribute('position', "0 1.3 -0.3");

    var keys = ["P","O","I","U","Y","T","R","E", "W", "Q"]
    var key_x = 0.15;
    var key_y = [0.34, 0.33, 0.32, 0.31, 0.31, 0.31, 0.32, 0.33, 0.34, 0.35] ;
    var key_z = -0.4
    var key_rotation_y = -45;

    for (i in keys){
      var key = document.createElement('a-entity');
      key.setAttribute('geometry',{ primitive:'box', height:0.04, width:0.03, depth: 0.04 });
      key.setAttribute('position',Math.abs(key_x) + " " + key_y[i] + " " + key_z);
      key.setAttribute('rotation', "0 "+ key_rotation_y + " 0" );
      key.setAttribute('material', {opacity:1,  color:'white'});
      key.setAttribute('tappable', '');

      var keyTextElement = document.createElement('a-text');
      keyTextElement.setAttribute('scale',"0.05 0.05 0.05");
      keyTextElement.setAttribute('rotation',"0 90 0");
      keyTextElement.setAttribute('value',keys[i]);
      keyTextElement.setAttribute('color','black');
      keyTextElement.setAttribute('position',"0.017 0 0");
    
    console.log(key_x)
      key_x = key_x - 0.03;
      key_z = key_z + 0.1;
      key_rotation_y = key_rotation_y + 10;
      key.appendChild(keyTextElement);
      plane.appendChild(key);
    }

    //2nd row of keys
    keys = ["L","K","J","H","G","F","D","S", "A"]
    key_x = 0.15;
    key_z = -0.3
    key_rotation_y = -35;

    for (i in keys){
      var key = document.createElement('a-entity');
      key.setAttribute('geometry',{ primitive:'box', height:0.04, width:0.03, depth: 0.04 });
      key.setAttribute('position',Math.abs(key_x) + " " + "0.26" + " " + key_z);
      key.setAttribute('rotation', "0 "+ key_rotation_y + " 0" );
      key.setAttribute('material', { opacity:1, color:'white'});
      key.setAttribute('tappable', '');

      var keyTextElement = document.createElement('a-text');
      keyTextElement.setAttribute('scale',"0.05 0.05 0.05");
      keyTextElement.setAttribute('rotation',"0 90 0");
      keyTextElement.setAttribute('value',keys[i]);
      keyTextElement.setAttribute('color','black');
      keyTextElement.setAttribute('position', "0.017 0 0");

      key_x = key_x - 0.03;
      key_z = key_z + 0.1;
      key_rotation_y = key_rotation_y + 10;
      key.appendChild(keyTextElement);
      plane.appendChild(key);
    }

  //3rd row of keys
  keys = ["M","N","B","V","C","X","Z"]
  key_x = 0.09;
  key_y = [0.18, 0.19, 0.19, 0.18, 0.18, 0.17, 0.16] ;
  key_z = -0.2
  key_rotation_y = -25;

  for (i in keys){
    var key = document.createElement('a-entity');
    key.setAttribute('geometry',{ primitive:'box', height:0.04, width:0.03, depth: 0.04 });
    key.setAttribute('position',Math.abs(key_x) + " " + key_y[i] + " " + key_z);
    key.setAttribute('rotation', "0 "+ key_rotation_y + " 0" );
    key.setAttribute('material', { opacity:1, color:'white' });
    key.setAttribute('tappable', '');

    var keyTextElement = document.createElement('a-text');
    keyTextElement.setAttribute('scale',"0.05 0.05 0.05");
    keyTextElement.setAttribute('rotation',"0 90 0");
    keyTextElement.setAttribute('value',keys[i]);
    keyTextElement.setAttribute('color','black');
    keyTextElement.setAttribute('position',"0.017 0 0");
  
    key_x = key_x - 0.03;
    key_z = key_z + 0.1;
    key_rotation_y = key_rotation_y + 10;
    key.appendChild(keyTextElement);
    plane.appendChild(key);
  }

  var spaceKey = document.createElement('a-entity');
  spaceKey.setAttribute('geometry',{ primitive:'cylinder', radius: 0.01,  height: 0.2 });
  spaceKey.setAttribute('position',"0.1 0.17 0.05");
  spaceKey.setAttribute('rotation', "90 0 0" );
  spaceKey.setAttribute('material', { opacity:1, color:'white'});
  spaceKey.setAttribute('tappable', '');

  var keyTextElement = document.createElement('a-text');
  keyTextElement.setAttribute('value'," ");
  
  spaceKey.appendChild(keyTextElement);
  plane.appendChild(spaceKey);

  var spaceKeyTextElement = document.createElement('a-text');
  spaceKeyTextElement.setAttribute('scale',"0.05 0.05 0.05");
  spaceKeyTextElement.setAttribute('rotation',"0 90 0");
  spaceKeyTextElement.setAttribute('value',"SPACE");
  spaceKeyTextElement.setAttribute('color','black');
  spaceKeyTextElement.setAttribute('position',"0.12 0.18 0.07");
  plane.appendChild(spaceKeyTextElement);

  this.el.parentNode.appendChild(plane);
}
});