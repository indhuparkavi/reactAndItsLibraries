// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners: any[] = [];

export const todosStore = {
    addTodo(value: string) {
        todos = [...todos, { id: nextId++, text: "Todo #" + value }];
        // emitChange();
    },
    subscribe(listener: any) {
        listeners = [...listeners, listener];
        return () => {
            listener = listeners.filter(l => l !== listener);
        }
    },
    getSnapshot() {
        return todos;
    }
};

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}
