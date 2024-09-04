import Button from "../components/button";
import { useState } from "react";

export default function CounterPage() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    };
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className="h-[600px] w-[1000px] border p-4 rounded-xl shadow bg-white p-24 flex flex-col gap-24 pt-24">
            <h1 className="text-7xl text-center tracking-wider font-bold">
                Counter
            </h1>
            <div className="text-green text-7xl text-center font-bold">
                {count}
            </div>
            <div className="flex gap-8 justify-center">
                <Button onClick={() => decreaseCount()}>Decrease</Button>
                <Button onClick={() => resetCount()}>Reset</Button>
                <Button onClick={() => increaseCount()}>Increase</Button>
            </div>
        </div>
    );
}
