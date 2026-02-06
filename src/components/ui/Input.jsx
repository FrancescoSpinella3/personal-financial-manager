import { useState } from "react";

export default function Input({ label, inputType, placeholder }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <p className="flex flex-col">
            <label 
                className="font-semibold text-sm mb-1"
            >
                {label}
            </label>
            
            <input 
                type={inputType}
                placeholder={placeholder}
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-indigo-50 focus:outline-indigo-500"
            />
        </p>
    );
}