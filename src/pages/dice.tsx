import Button from "../components/button";
import { useState } from "react";

export default function Dice() {
    const [maxValue, setMaxValue] = useState(20);
    const [diceRoll, setDiceRoll] = useState<number>();

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * maxValue) + 1;
        setDiceRoll(randomNumber);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);

        if (value <= 0 || isNaN(value)) {
            setMaxValue(0);
        } else {
            setMaxValue(value);
        }
    };

    return (
        <div className="h-[300px] w-[500px] border p-12 rounded-xl shadow bg-white gap-4 flex flex-col">
            <p className="font-semibold text-xl">Max Dice Value</p>
            <input
                className="border rounded h-12 px-4"
                onChange={handleInputChange}
                type="number"
                min={1}
                defaultValue={maxValue}
            />
            <Button
                onClick={() => {
                    rollDice();
                }}
            >
                Roll
            </Button>
            <div className="font-semibold text-xl">Result: {diceRoll}</div>
        </div>
    );
}
