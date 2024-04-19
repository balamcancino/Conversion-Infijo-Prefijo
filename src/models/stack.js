    // Implementación de una pila utilizando listas enlazadas
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    export default class Stack {
        constructor() {
            this.top = null;
            this.size = 0;
        }

        push(data) {
            const newNode = new Node(data);
            if (!this.top) {
                this.top = newNode;
            } else {
                newNode.next = this.top;
                this.top = newNode;
            }
            this.size++;
        }

        pop() {
            if (!this.top) return null;
            const popped = this.top.data;
            this.top = this.top.next;
            this.size--;
            return popped;
        }

        peek() {
            return this.top ? this.top.data : null;
        }

        isEmpty() {
            return this.size === 0;
        }
    }
