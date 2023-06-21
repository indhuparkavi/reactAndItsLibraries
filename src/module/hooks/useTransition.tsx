

// https://react.dev/reference/react/startTransition
// https://www.freecodecamp.org/news/react-18-new-features/

/*
Start Transition:
startTransition lets you update the state without blocking the UI.
Problem:
when user tring to searching the data with bulk list, each and every entry (input from user) of user will let you call the response from end point.
this may freez the screen or slow down the progress.
To over come this we used debounce methods.
Still debounce method called only after the set time completes. 
Solution:
What is Transition and starttransition:
Definition with demo:https://tasoskakour.com/blog/react-18-new-api-start-transition

useTransition:
syn: const [isPending, startTransition] = React.useTransition();
Demo:https://react-fractals-git-react-18-swizec.vercel.app/

Caveat:
A state update marked as a transition will be interrupted by other state updates.
For example, if you update a chart component inside a transition, 
but then start typing into an input while the chart is in the middle of a re-render, 
React will restart the rendering work on the chart component after handling the input state update.
.Transition updates can’t be used to control text inputs.

Limitation:
.If there are multiple ongoing transitions, React currently batches them together. 
This is a limitation that will likely be removed in a future release.
*/

// Concurrent
// https://www.freecodecamp.org/news/react-18-new-features/
// concept:https://react.dev/blog/2022/03/29/react-v18

import React, { useTransition, useState } from "react";
import { flushSync } from "react-dom";
import List from "./components/List";

const StartTransition = ({ prop }: any) => {
    const [input, setInput] = useState('');
    const [list, setList] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();

    const [state1, setState1] = React.useState('');
    const [state2, setState2] = React.useState('');
    const [state3, setState3] = React.useState('');
    const [state4, setState4] = React.useState('');

    // useTimeout(2000);
    // React.useEffect(() => {
    //     // setTimeout(() => {
    //     // setState4('123')
    //     handleOnClick();
    //     // }, 3000)
    // }, [state1, state2, state3, state4]);


    console.log(state1, state2, state3, state4, '1234');


    const handleChange = (e: any) => {
        setState1(e.target.value);
        setState2(e.target.value);
        setState3(e.target.value);
        setState4(e.target.value);
    }

    const handleOnClick = async () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
            setState1('1');
            setState2('1');
            setState4('1');
            flushSync(() => {
                setState3('1');
            })

        });
    }

    function loop(event: any) {
        let x = 30000;
        const list: any[] = []
        for (let i = 0; i <= x; i++) {
            list.push(event)
        }
        setList(list);
    }

    // useEffect(() => {
    //     if (input) {
    //         startTransition(() => {
    //             loop(input)
    //         })
    //     }
    // }, [input])
    function handleChange1(event: any) {
        setInput(event.target.value);
        startTransition(() => {
            loop(event.target.value)
        })
    }

    return (
        <div style={{ backgroundColor: 'wheat' }}>
            <input value={input} onChange={handleChange1} />
            <button onClick={handleOnClick} >Click</button>
            <div style={{ backgroundColor: 'wheat' }} >
                {state1}
            </div>
            <List list={list} is={isPending} />
        </div>
    )
}

export default StartTransition;