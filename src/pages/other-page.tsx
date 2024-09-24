import { useState } from "react";

export default function OtherPage() {
    const { x, setX } = useState();
    const { string, setString } = useState();

    function handleClick() => {
        alert("The" + x + "th letter of" + string + "is" + string[x]);

        return x;
    }

    return (
        <div className="border rounded border-black p-4 w-8">
                <<<<<<< HEAD
                                <h6 className="text-2xl text-center mb-3">Get nth letter</h6>
                =======
                                <h1 className="text-2xl text-center mb-3">Get nth letter</h1>
                >>>>>>> branch-name
            <span className="text-lg mb-6">
                This page will return the nth letter of the string you provide.
            </span>
            <div className="flex flex-col gap-3">
                <label>
                    Enter a string:
                    <input
                        value={string}
                        onChange={(e) => {
                            setString(e.target.value);
                        }}
                        className="border rounded border-black p-2"
                    />
                </label>
                <label>
                    Enter an index:
                    <input
                        value={x}
                        onChange={(e) => {
                            setX(e.target.value);
                        }}
                        className="border rounded border-black p-2 text-white"
                    />
                </label>
                <div
                    onClick={handleClick}
                    className="border font-bold rounded border-black p-2"
                >
                    Get nth letter
                </div>
            </div>
        </div>
    );
}
