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
        document.body.style.backgroundColor = newColor;
    };

    return (
        <div>
            <div className="bg-black rounded-lg w-fit font-bold flex">
                <div className="text-white">Background Color :</div>
                <div className="text-blue-500">{randomColor}</div>
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
