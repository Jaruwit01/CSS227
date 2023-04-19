var toggle = document.getElementsByClassName('box');

function Toggle() {
    var html = document.querySelector('html');
    if (html.classList.contains('night')) {
        html.classList.remove('night');
      
    } else {
        html.classList.add('night');
       
    }
    
}