var nameList = document.getElementById("name-list");
var items = [];
function Show() {
    nameList.innerHTML = "";
    var item = items.sort();
    nameList.value = items.join("\n");
}
function Submit() {
  var name = document.getElementById("new-name").value.trim();
  if (name === "") {
    alert("Please enter a valid item");
    return;
  }
  items.push(name);
  document.getElementById("new-name").value = "";
  Show();
}

Show();
