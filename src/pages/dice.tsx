import Button from "../components/button";

export default function Dice() {
    return (
        <div className="h-[300px] w-[500px] border p-12 rounded-xl shadow bg-white gap-4 flex flex-col">
            <p className="font-semibold text-xl">Max Dice Value</p>
            <input className="border rounded h-12 px-4"></input>
            <Button onClick={() => {}}>Roll</Button>
            <div className="font-semibold text-xl">Result:</div>
        </div>
    );
}
