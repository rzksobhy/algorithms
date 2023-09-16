type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export class DoublyLinkedList<T> {
    head?: Node<T>;
    tail?: Node<T>;
    length: number;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    printList() {
        let curr = this.head;
        let values: T[] = [];

        while (curr) {
            values.push(curr.value);
            curr = curr.next;
        }

        console.log(`values: ${JSON.stringify(values)}`);
    }

    get(index: number): T | undefined {
        const node = this.getNode(index);
        return node?.value;
    }

    first(): T | undefined {
        return this.head?.value;
    }

    last(): T | undefined {
        return this.tail?.value;
    }

    append(value: T) {
        this.length++;

        const node = { value } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    prepend(value: T) {
        this.length++;

        const node = { value } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;

        this.head = node;
    }

    insert(index: number, value: T) {
        if (index == 0) {
            this.prepend(value);
            return;
        } else if (index == this.length) {
            this.append(value);
            return;
        }

        this.length++;

        const node = { value } as Node<T>;

        const curr = this.getNode(index) as Node<T>;

        (curr.prev as Node<T>).next = node;
        node.prev = curr.prev;

        curr.prev = node;
        node.next = curr;
    }

    remove(value: T): void {
        let curr = this.head;
        while (curr) {
            if (curr.value == value) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return;
        }

        this.removeNode(curr);
    }

    removeAt(index: number): T | undefined {
        const node = this.getNode(index);

        const value = node?.value;
        if (node) {
            this.removeNode(node);
        }

        return value;
    }

    private removeNode(node: Node<T>): void {
        this.length--;
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        node.next = node.prev = undefined;
    }

    private getNode(index: number): Node<T> | undefined {
        if (index < 0 || index > this.length) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
