import { useState } from "react";

export default function Input({
    children, 
    label,
    id,
    select,
    placeholder, 
    value, 
    onChange, 
    error, 
    ...props 
}) {

    const [focused, setFocused] = useState(false);

    // Show error styles only when not focused
    const showError = error && !focused && !value;

    // Default classes for label and input
    let labelClasses = "font-medium text-sm mb-1.5 text-(--dark-main-color)";
    let inputClasses = "p-2 border border-(--dark-fourth-color) rounded-md bg-gray-50 focus:outline-(--second-color)";

    // Add a class if there is an error and input is not focused
    if (showError) {
        labelClasses += ' text-red-600';
    }

    if (showError) {
        inputClasses += ' border-red-600';
    }

    return (
        <div className="flex flex-col w-full">
            <label 
            htmlFor={id}
                className={labelClasses}
            >
                {label}
            </label>

            {select ? (
                <select
                    id={id}
                    className={inputClasses}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                >
                    {/* <option value="" disabled >Seleziona un'opzione</option>
                    <option value="Maschio">Maschio</option>
                    <option value="Femmina">Femmina</option> */}
                    {children}
                </select>
            ) : (
                <input 
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={inputClasses}
                    {...props}
                />
            )}

            {error && (
                <span className="text-red-600 text-xs mt-1">
                    {error}
                </span>
            )}
        </div>
    );
}