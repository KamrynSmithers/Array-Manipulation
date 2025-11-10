//let presentationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// presentationArray.push(67) // inserts a passed element at the end of the array
//console.log(presentationArray)

let itemm = document.getElementById("itemm");
let addItem = document.getElementById("addItem");
let taskList = document.getElementById("taskList");
 
addItem.addEventListener("click", function () {
  let taskText = itemm.value;
 
  if (taskText === "") {
    alert("Please enter a item!");
    return;
  }
 
  let listItem = document.createElement("li");
  listItem.innerText = taskText;
 
  taskList.appendChild(listItem);
  itemm.value = ""; 
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    taskList.removeChild(event.target);
  }
});
removeButton.addEventListener ("click", function(){
    let lastItem = taskList.lastElementChild
    if (lastItem) {
        taskList.removeChild(lastItem)
    }
})
//let shoppingList = [];
//addItem ("shoes")
//addItem ("shirts")
//function addItem(addtoBag) { 
//shoppingList.push(addtoBag); }
//console.log(shoppingList)