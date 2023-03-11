var items =[];
var itemList = document.getElementById("item-list");
function showList(){
    itemList.innerHTML = "";
    for (var i = 0; i < items.length; i++){
        var item = items[i];
        var checkbox = '<input type="checkbox" onchange="updateItem('+i+')"';
        if (item.completed){
            checkbox += 'checked';
        }
        checkbox += '>';
		var text = '<span class="' + (item.completed ? 'completed' : '') + '">' + item.text + '</span>';
        var removeItem = '<button onclick="removeItem('+i+')">Remove</button>';
        itemList.innerHTML += '<li>' + checkbox + text + removeItem + '</li>';
    }
}
function addItem(){
    var input = document.getElementById("new-item").value.trim();
    if (input ===""){
        alert("Please enter a valid item");
        return;
    }
    items.push({text: input, completed: false});
    document.getElementById("new-item").value = "";
    showList();
}

function removeItem(index){ 
    items.splice(index, 1);
    showList();
}
function updateItem(index){
    items[index].completed = !items[index].completed;
    showList();
}
showList();