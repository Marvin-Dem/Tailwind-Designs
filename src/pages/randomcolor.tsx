import Button from "../components/button";
import { useState } from "react";

export default function RandomColor() {
    const [randomColor, setRandomColor] = useState("#FFFFFF");

    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let hexCode = "#";
        for (let i = 0; i < 6; i++) {
            hexCode += letters[Math.floor(Math.random() * 16)];
        }
        return hexCode;
    };

    const clickFunction = () => {
        const newColor = generateRandomColor();
        setRandomColor(newColor);
    };

    return (
        <div
            className="mb-12 flex flex-col gap-4 justify-center items-center w-full h-full"
            style={{ backgroundColor: randomColor }}
        >
            <div className="bg-black rounded-lg w-fit font-bold p-4 flex gap-2 text-xl">
                <div className="text-white">Background Color :</div>
                <div className="text-blue">{randomColor}</div>
            </div>
            <Button
                onClick={() => {
                    clickFunction();
                }}
            >
                Click me
            </Button>
        </div>
    );
}
