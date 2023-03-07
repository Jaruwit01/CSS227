
const btnToggle = document.querySelector('.toggle');

btnToggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('night')) {
        html.classList.remove('night');
        e.target.innerHTML = 'Active the night mode';
        document.getElementById('header').innerHTML= 'GOOD MORNING';
        document.getElementById('title').innerHTML = 'This is day time!';
    }
    else {
        html.classList.add('night');
        e.target.innerHTML = 'Active the day mode';
        document.getElementById('header').innerHTML= 'GOOD NIGHT';
        document.getElementById('title').innerHTML = 'This is night time!';
    }
});


