import Button from "../components/button";
import { useState } from "react";

export default function Dice() {
    const [maxValue, setMaxValue] = useState(20);
    const [diceRoll, setDiceRoll] = useState<number>();

    function Zero() {
        if (maxValue === 0 || NaN) return "";
    }
    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * maxValue) + 1;
        setDiceRoll(randomNumber);
    };
    return (
        <div className="h-[300px] w-[500px] border p-12 rounded-xl shadow bg-white gap-4 flex flex-col">
            <p className="font-semibold text-xl">Max Dice Value</p>
            <input
                className="border rounded h-12 px-4"
                value={maxValue}
                onChange={(e) => {
                    Zero();
                    setMaxValue(Number(e.target.value));
                }}
                type="number"
                min={0}
            ></input>
            <Button
                onClick={() => {
                    rollDice();
                }}
            >
                Roll
            </Button>
            <div className="font-semibold text-xl">Result:{diceRoll}</div>
        </div>
    );
}
