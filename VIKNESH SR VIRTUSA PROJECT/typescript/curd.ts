type Item = {
	id: number;
	name: string;
};

let items: Item[] = [];

function createItem(item: Item): void {
	items.push(item);
}

function readItems(): Item[] {
	return items;
}

function updateItem(id: number, name: string): void {
	const item = items.find((item) => item.id === id);
	if (item) item.name = name;
}

function deleteItem(id: number): void {
	items = items.filter((item) => item.id !== id);
}

createItem({ id: 1, name: "Book" });
console.log("Created:", readItems());

updateItem(1, "Notebook");
console.log("Updated:", readItems());

deleteItem(1);
console.log("Deleted:", readItems());
