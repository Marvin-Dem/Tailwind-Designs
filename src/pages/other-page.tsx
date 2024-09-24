import { useState } from "react";
import Button from "../components/button";

export default function OtherPage() {
    const [indexValue, setIndexValue] = useState(0);
    const [string, setString] = useState("");

    function handleClick() {
        let ending;
        if (indexValue === 1) {
            ending = "st";
        } else if (indexValue === 2) {
            ending = "nd";
        } else if (indexValue === 3) {
            ending = "rd";
        } else {
            ending = "th";
        }
        if (indexValue > 0) {
            alert(
                `The ${indexValue}${ending} letter of ${string} is ${
                    string[indexValue - 1]
                }`
            );
        } else {
            alert("Please enter a valid number (>0) in the index input field.");
        }
    }

    return (
        <div className="border rounded border-black p-4 flex flex-col items-center">
            <h1 className="text-2xl text-center mb-3 font-bold">
                Get nth letter
            </h1>
            <p className="text-lg mb-6">
                This page will return the nth letter of the string you provide.
            </p>
            <div className="flex flex-col gap-3">
                <label>
                    Enter a string:
                    <input
                        value={string}
                        onChange={(event) => {
                            setString(event.target.value);
                        }}
                        className="border rounded border-black p-2 ml-2"
                    />
                </label>
                <label>
                    Enter an index:
                    <input
                        value={indexValue}
                        onChange={(event) => {
                            setIndexValue(Number(event.target.value));
                        }}
                        className="border rounded border-black p-2 ml-2"
                    />
                </label>
                <Button onClick={handleClick}>Get nth letter</Button>
            </div>
        </div>
    );
}
