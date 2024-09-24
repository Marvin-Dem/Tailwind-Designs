import { useEffect, useState } from "react";

function logHello() {
    // this function shall stay
    export function innerFunction() {
        const x: string = "hello";
        return x;
    }

    console.log(x);
}

function getFamilyName(givenName) {
    const lastName = "";
    if (givenName === "Udo") {
        lastName = "Lindenberg";
    } else if (givenName === "Thomas") {
        lastName = "Gottschalk";
    } else if (givenName === "Stefan") {
        lastName = "Raab";
    }
}

function functionThatShouldOnlyBeCallableDirectlyFromPublicFunction() {
    // do secret things
}

export function publicFunction() {
    return functionThatShouldOnlyBeCallableDirectlyFromPublicFunction();
}

function mightThrowError() {
    const value = Math.random();
    if (value < 0.25) {
        throw new Error("Value too small");
    } else if (value > 0.75) {
        throw new Error("Value too big");
    } else {
        return value;
    }
}

function doStaticThings() {
    const hello = logHello();
    console.log(hello);

    publicFunction();
    functionThatShouldOnlyBeCallableDirectlyFromPublicFunction();

    const udosFamilyName = getFamilyName("Udo");
    const stefansFamilyName = getFamilyName("Stefan");
    const herbertsFamilyName = getFamilyName("Herbert");
    console.log(
        "Family Names:",
        udosFamilyName,
        stefansFamilyName,
        herbertsFamilyName
    );

    const baseValue = 10;

    try {
        const value = mightThrowError();
    } catch {
        console.error(
            "I would like to be a dynamic error instead of this static string"
        );
    }

    const sum = baseValue + value;

    console.log("sum: ", sum);
}

export default function SomePage() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    // this is okay
    useEffect(() => {
        doStaticThings();
    }, []);

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
