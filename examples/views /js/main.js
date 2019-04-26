function main(){
    // TODO : @reuben
    app = "main";
    console.log("main app");

    // Always append assets to a-scene. 
    
    var body = document.getElementById('p');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    var ed = document.getElementById('editor');
    if(typeof(ed) != 'undefined' && ed != null){
        console.log("error");
        document.getElementById('editor').outerHTML = "";
    }
    // var hand = document.querySelectorAll('[leap-hand]');
    // hand[0].outerHTML = '<a-entity leap-hand="hand: left; enablePhysics: true;"></a-entity>';
    // hand[1].outerHTML = '<a-entity leap-hand="hand: right; enablePhysics: true;"></a-entity>';

    var myvar = '<a-entity view="src1:#poster1; src2:#poster2;" position="0 1.6 0">'+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-text value="Docs" position="-0.06 0 0.05" color="purple" rotation="0 0 0" text="" scale="0.15 0.15 0.15"></a-text>'+
'                                <a-imagebutton id="docs" tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity> '+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-text value="Blocky" position="-0.06 0 0.05" color="purple" rotation="0 0 0" text="" scale="0.15 0.15 0.15"></a-text>'+
'                                <a-imagebutton id="block" tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity>'+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-text value="DaVinci" position="-0.06 0 0.05" color="purple" rotation="0 0 0" text="" scale="0.15 0.15 0.15"></a-text>'+
'                                <a-imagebutton id="paint" tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity>'+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-imagebutton tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity>'+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-text value="Athena" position="-0.06 0 0.05" color="purple" rotation="0 0 0" text="" scale="0.15 0.15 0.15"></a-text>'+
'                                <a-imagebutton id="know" tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity>'+
'                        <a-entity>'+
'                                <a-box shadow="cast:true;receive:true" position="0 -0.025 0.0175" rotation="0 0 0"'+
'                                width="0.1875" height="0.15" depth="0.005">'+
'                                <a-imagebutton tappable></a-imagebutton>'+
'                            </a-box>'+
'                        </a-entity>'+
'                    </a-entity>';
	

    body.innerHTML += myvar;
    // console.log(body.innerHTML);
}