var t=AFRAME.registerComponent("views",{schema:{position:{default:"0 0 -2"},rotpos:{default:"rot0"},animation:{default:"",property:"rotation",to:"0 -60 0",startEvents:"rot0",repeat:"1"},animation__2:{default:"",property:"rotation",to:"0 -120 0",startEvents:"rot1",repeat:"1"},animation__3:{default:"",property:"rotation",to:"0 -180 0",startEvents:"rot2",repeat:"1"},animation__4:{default:"",property:"rotation",to:"0 -240 0",startEvents:"rot3",repeat:"1"},animation__5:{default:"",property:"rotation",to:"0 -300 0",startEvents:"rot4",repeat:"1"},animation__6:{default:"",property:"rotation",to:"0 0 0",startEvents:"rot5",repeat:"1"}},init:function(){console.log(AFRAME),cards=[];for(var t=0;t<6;t++)console.log("yeah you called hexagon"),cards.push(document.createElement("a-box"))},full_body_carousel_right_move:function(){cards=this,console.log("entering this function"),"none"==lastrot?(cards.emit("rot0"),lastrot="rot0"):(console.log(),lastrot="rot"+String((Number(lastrot[3])+1)%6),console.log(lastrot),cards.emit(lastrot))}}),e=AFRAME.registerComponent("cards",{schema:{depth:{default:.01,min:0},height:{default:3,min:0},width:{default:3.75,min:0},segmentsHeight:{default:1,min:1,max:20,type:"int"},segmentsWidth:{default:1,min:1,max:20,type:"int"},segmentsDepth:{default:1,min:1,max:20,type:"int"}},init:function(t){this.geometry=new THREE.BoxGeometry(t.width,t.height,t.depth,t.segmentsWidth,t.segmentsHeight,t.segmentsDepth)}});exports.views=t,exports.cards=e;
//# sourceMappingURL=vrleap_ui.js.map
