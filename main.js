var myInput = document.getElementById('myInput');

myInput.onfocus = function () {

        this.setAttribute('data-save', this.getAttribute('placeholder'));
    
        this.setAttribute('placeholder', '');
    }

    
myInput.onblur = function() {

    this.setAttribute('placeholder', this.getAttribute('data-save'));

    this.setAttribute('data-save', '');

}