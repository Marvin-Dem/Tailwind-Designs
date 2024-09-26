import { useEffect, useState } from "react";

function logHello() {
    function returnHello() {
        const hello = "hello";
        return hello;
    }
    console.log(returnHello());
}

function getFamilyName(givenName: string) {
    let familyName;
    if (givenName === "Udo") {
        familyName = "Lindenberg";
    } else if (givenName === "Thomas") {
        familyName = "Gottschalk";
    } else if (givenName === "Stefan") {
        familyName = "Raab";
    } else {
        console.log("Name is not available");
    }
    return familyName;
}

function publicFunction() {
    function functionThatShouldOnlyBeCallableDirectlyFromPublicFunction() {
        // do secret things
    }
    return functionThatShouldOnlyBeCallableDirectlyFromPublicFunction();
}

function mightThrowError() {
    const value = Math.random();
    if (value < 0.25) {
        throw Error("Value too small");
    } else if (value > 0.75) {
        throw Error("Value too big");
    } else {
        return value;
    }
}

function doStaticThings() {
    logHello();
    publicFunction();

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
    let sum;
    try {
        const value = mightThrowError();
        sum = baseValue + value;
    } catch (e) {
        console.error(e);
    }
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
