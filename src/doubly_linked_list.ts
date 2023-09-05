type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export class DoublyLinkedList<T> {
    get(index: number): T | undefined {}

    append(value: T) {}

    prepend(value: T) {}

    insert(index: number, value: T) {}

    remove(value: T): void {}

    removeAt(index: number): T | undefined {}
}
