// These components are very specific to the apps that are written for. 
// If sample code needed please look into the examples folder

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
            if(self.el.id && typeof window[self.el.id] === "function"){
                eval(self.el.id)(); 
                // Functions to be implemented
                // 1. paint
                // 2. block
                // 3. know
                // 4. docs
            }
            else{
                updateText(self.el.children[0].getAttribute('value')); //  in docs.js
            }
        }, 500);
    }    
});