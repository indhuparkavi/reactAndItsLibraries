
// https://www.pluralsight.com/blog/software-development/suspense-react-18-explained

import { rejects } from "assert";
import { resolve } from "path";
import { useEffect } from "react";

const Suspension = () => {
    useTimeout(2000)
    // useEffect(() => {
    //     test()
    // }, [])
    // function test() {
    //     const data = new Promise((resolve, rejects) => {
    //         if (true) {
    //             resolve('adsf')
    //         } else {
    //             rejects()
    //         }
    //     })
    //     console.log(data);
    // }

    // useTimeout(2000);


    return (
        <div>
            Loaded
        </div>
    )
}
export default Suspension;

let fullfilled = false;
let promise: Promise<void> | null = null;

export const useTimeout = (ms: number) => {
    if (!fullfilled) {
        throw promise ||= new Promise((res) => {
            setTimeout(() => {
                fullfilled = true;
                res();
            }, ms);
        });
    }
};