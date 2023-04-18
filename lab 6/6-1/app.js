const ck = document.querySelector('#box1', '#box2', '#box3', '#box4');
ck.addEventListener('click', (e) => {
    const box = document.querySelector('#box1', '#box2', '#box3', '#box4');
    if (box.classList.contains('night')) {
        box.classList.remove('night');
    }
    else {
        box.classList.add('night');
    }

});    