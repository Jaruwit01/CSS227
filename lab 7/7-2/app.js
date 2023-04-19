var drop = document.getElementsByClassName('drop');
function Drop() {
    var html = document.querySelector('html');
    if (html.classList.contains('night')) {
        html.classList.remove('night');
       
        document.getElementById('d-d').innerHTML= '^Hide Details';
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const node1 = document.createTextNode('ข้อความที่ 1');
        const node2 = document.createTextNode('ข้อความที่ 2');
        li1.appendChild(node1);
        li2.appendChild(node2);

        const element = document.getElementById("list");
        element.appendChild(li1);
        element.appendChild(li2);
        
    } 
    else {
        html.classList.add('night');
        document.getElementById('d-d').innerHTML= '>Show details';
        const element = document.getElementById("list");
        element.removeChild(element.childNodes[0]);
        element.removeChild(element.childNodes[0]);


       
}
}