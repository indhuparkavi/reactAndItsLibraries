import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';
import List from './components/List';

const UseDeferredValue = () => {
    const math = Math.random();
    const id = React.useId();


    const [name, setName] = useState<string>('');
    const deferredName = useDeferredValue(name);

    const LIST_SIZE: number = 10000;
    useEffect(() => {
        console.log(name, deferredName);
    }, [deferredName])

    const list = useMemo(() => {
        const dataList: string[] = [];
        for (let i: number = 0; i < LIST_SIZE; i++) {
            dataList.push(deferredName);
        }
        return dataList;
    }, [deferredName]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div>
            <input type='text' value={name} onChange={handleChange} />
            <div>
                {list.map((item: any) => {
                    return <p>{item}</p>;
                })}
            </div>
        </div>
    );
}
export default UseDeferredValue;