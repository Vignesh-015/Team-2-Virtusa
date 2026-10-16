"use strict";
let items = [];
function createItem(item) {
    items.push(item);
}
function readItems() {
    return items;
}
function updateItem(id, name) {
    const item = items.find((item) => item.id === id);
    if (item)
        item.name = name;
}
function deleteItem(id) {
    items = items.filter((item) => item.id !== id);
}
createItem({ id: 1, name: "Book" });
console.log("Created:", readItems());
updateItem(1, "Notebook");
console.log("Updated:", readItems());
deleteItem(1);
console.log("Deleted:", readItems());
