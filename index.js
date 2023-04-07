let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("first-name").value;
  row.insertCell(1).innerHTML = document.getElementById("last-name").value;
  row.insertCell(2).innerHTML = document.getElementById("new-email").value;
  row.insertCell(3).innerHTML = document.getElementById("class-name").value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("class-name").value = "";
});
//adds information to table when button is clicked.
//tells certain information to go in certain table cells.
//adds delete button to last cell.
//clears out inputs above table to make adding new information easier.

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-danger";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
//delete button that is added to the last cell of each row in the table that has information.
