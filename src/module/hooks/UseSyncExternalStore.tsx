
import { useSyncExternalStore, useState } from 'react';
import { todosStore } from './store';

export default function UseSyncExternalStore() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setName(value);
    };
    return (
        <>
            <input type='text' value={name} onChange={handleChange} />
            <button onClick={() => todosStore.addTodo(name)}>Add todo</button>
            <hr />
            <ul>
                {todos?.length &&
                    <div>
                        {todos?.map(todo => (
                            <li key={todo.id}>{todo.text}</li>
                        ))}
                    </div>
                }
            </ul>
        </>
    );
}






