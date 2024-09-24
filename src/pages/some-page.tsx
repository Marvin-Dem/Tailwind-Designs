import { useState } from "react";

const counter = 0;

export default function SomePage() {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count - 1);
    };

    function handleClick() {
        increment();
    }

    return (
        <div>
            <h2 className="text-2xl">Welcome to the Main Page</h2>
            <h1 className="text-lg mb-6">
                Click the button to increment the counter
            </h1>
            <div>
                <p>Clicked {counter} tiems.</p>
                <button
                    onClick={() => handleClick}
                    className="border rounded border-black p-2"
                >
                    Increment
                </button>
            </div>
        </div>
    );
}
