import { useState } from "react";

export default function SomePage() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1 className="text-2xl">Welcome to the Main Page</h1>
            <h2 className="text-lg mb-6">
                Click the button to increment the counter
            </h2>
            <div>
                <p>Clicked {count} times.</p>
                <button
                    onClick={() => increment()}
                    className="border rounded border-black p-2"
                >
                    Increment
                </button>
            </div>
        </div>
    );
}
