var toggle = document.getElementsByClassName('box');

function Toggle() {
    var html = document.querySelector('html');
    if (html.classList.contains('night')) {
        html.classList.remove('night');
        toggle.innerHTML = 'Activate night mode';
    } else {
        html.classList.add('night');
        toggle.innerHTML = 'Activate day mode';
    }
    
}