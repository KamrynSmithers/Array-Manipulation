// Task 1: Array Manipulation Basics
//let shoppingList = [];
//addItem ("shoes")
//addItem ("shirts")
//function addItem(addtoBag) { 
//shoppingList.push(addtoBag); }
//console.log(shoppingList)

//function removeLastItem () {
//    shoppingList.pop();
//}
//removeLastItem()
//console.log(shoppingList)

//function displayList () {
//console.log(shoppingList)
//}
//displayList()


//Task 2: Filter and Search an Array
let shoppingList = ["curtains", "rugs", "paintings"];
//function addItem (addPl) {
//    if (!shoppingList.includes(addPl)) {
//        shoppingList.push(addPl)
//    }
//}
//addItem ("plants")
//addItem ("rugs")
//console.log(shoppingList)

function filterItems (arr, pass) {
return arr.filter((en) =>
    en.toLowerCase().includes(pass.toLowerCase())
)
}
console.log(filterItems(shoppingList, "cu"))
console.log(filterItems(shoppingList, "ru"))