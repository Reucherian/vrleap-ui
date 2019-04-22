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
            if(self.el.id){
                // Functions to be implemented
                // 1. paint
                // 2. block
                // 3. know
                // 4. docs
                eval(self.el.id)();
            }
        }, 500);
    }    
});