import { useState, useEffect } from 'react';

const Counter = () => {

    const [count1, setCount1] = useState(0);
    
    useEffect(() => {
    console.log("Inside useEffect")
    },[count1]);

    const [count2, setCount2] = useState(0);

    const increment1 = () => {
        setCount1(count1 + 1);
        console.log(count1+1);
    }
    const decrement1 = () => {
        setCount1(count1 - 1);
        console.log(count1-1);
    }

    const increment2 = () => {
        setCount2(count2 + 1);
        console.log(count2+1);
    }

    const decrement2 = () => {
        setCount2(count2 - 1);
        console.log(count2-1);
    }

    return (
        <div className="w-[300px] bg-yellow-50 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center justify-center mt-4">
            <h1 className="text-xl mb-2">Counter</h1>
            <p className="text-4xl mb-2">{count1}</p>

            <div className="flex gap-4">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md" onClick={decrement1}>Decrement 1</button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md" onClick={increment1}>Increment 1</button>
            </div>
            <p className="text-4xl mb-2">{count2}</p>
            <div className="flex gap-4 mt-2">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md" onClick={decrement2}>Decrement 2</button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md" onClick={increment2}>Increment 2</button>
            </div>
        </div>
    )
}

export default Counter;