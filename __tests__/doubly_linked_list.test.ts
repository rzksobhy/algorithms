import { DoublyLinkedList } from "../src/doubly_linked_list";

test("doubly linked list", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.length).toEqual(3);

    const first = list.first();
    expect(first).toEqual(1);

    const last = list.last();
    expect(last).toEqual(3);

    const item1 = list.get(1);
    expect(item1).toEqual(2);

    list.prepend(0);
    expect(list.first()).toEqual(0);
    expect(list.length).toEqual(4);

    list.append(4);
    expect(list.last()).toEqual(4);
    expect(list.length).toEqual(5);

    list.insert(1, 9);
    expect(list.get(1)).toEqual(9);
    expect(list.length).toEqual(6);

    list.remove(9);
    expect(list.length).toEqual(5);
    expect(list.get(1)).toEqual(1);

    const removed = list.removeAt(1);
    expect(list.length).toEqual(4);
    expect(removed).toEqual(1);
});
