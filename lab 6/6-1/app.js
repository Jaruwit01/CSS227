// const toggle = document.querySelector('.toggle');

// toggle.addEventListener('click', (e) => {
//   const html = document.querySelector('html');
// //   const box1 = document.getElementById('box1');
// //   const box2 = document.getElementById('box2');
// //   const box3 = document.getElementById('box3');
// //   const box4 = document.getElementById('box4');
  
//   if (html.classList.contains('night')) {
//     html.classList.remove('night');
//     e.target.innerHTML = 'Activate night mode';
//     // box1.style.color = '#000';
//     // box2.style.color = '#000';
//     // box3.style.color = '#000';
//     // box4.style.color = '#000';
//   } else {
//     html.classList.add('night');
//     e.target.innerHTML = 'Activate day mode';
// //     box1.style.color = '#fff';
// //     box2.style.color = '#fff';
// //     box3.style.color = '#fff';
// //     box4.style.color = '#fff';
//   }
// });

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