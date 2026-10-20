class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;

    add(data: T): void {
        const node = new Node<T>(data);

        if (this.head === null) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
    }

    display(): void {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList<number>();

list.add(10);
list.add(20);
list.add(30);

list.display();