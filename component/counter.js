"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaRedo } from "react-icons/fa";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="card w-80 bg-base-100 shadow-xl rounded-lg">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-gray-800">{props.title}</h2>
                <p className="text-6xl font-bold text-primary my-4">{count}</p>
                <div className="card-actions justify-center space-x-4">
                    <button
                        onClick={increment}
                        className="btn btn-success btn-circle text-xl"
                        aria-label="Increment"
                    >
                        <FaPlus />
                    </button>
                    <button
                        onClick={decrement}
                        className="btn btn-error btn-circle text-xl"
                        aria-label="Decrement"
                    >
                        <FaMinus />
                    </button>
                    <button
                        onClick={reset}
                        className="btn btn-secondary btn-circle text-xl"
                        aria-label="Reset"
                    >
                        <FaRedo />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;