import { Eye, EyeClosed } from "lucide-react";
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
    type,
    ...props 
}) {

    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Set type "password" if showPassword is true, otherwise set "text"
    const isPassword = type === "password";
    const currentType = isPassword ? (showPassword ? "text" : "password") : type;

    // Show error styles only when not focused
    const showError = error && !focused && !value;

    // Default classes for label and input
    let labelClasses = "font-medium text-sm mb-1.5";
    let inputClasses = "p-2 border rounded-md bg-(--light-bg-input) dark:bg-(--dark-bg-input) focus:outline-(--second-color) w-full text-[0.9em] placeholder:text-(--dark-third-color) dark:text-(--dark-fourth-color)";
    
    // Add classes if input type is password
    if (isPassword) inputClasses += ' pr-10';

    // Add a class if there is an error and input is not focused
    if (showError ? labelClasses += ' text-red-600' : labelClasses += ' text-(--dark-main-color) dark:text-(--light-color)');
    if (showError ? inputClasses += ' border-red-600' : inputClasses += ' border-(--light-border-color) dark:border-(--dark-border-color)');

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className={labelClasses}>
                {label}
            </label>

            {select ? (
                <select
                    id={id}
                    className={inputClasses}
                    defaultValue={value ?? ""}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                >
                    {children}
                </select>
            ) : (
                <div className="relative">
                    <input 
                        id={id}
                        type={currentType}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className={inputClasses}
                        {...props}
                    />

                    {/* If input type is password show show password button */}
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-(--dark-third-color) cursor-pointer"
                            aria-label={showPassword ? "Nascondi password" : "Mostra password"}
                        >
                            {showPassword 
                                ? <EyeClosed className="size-4" /> 
                                : <Eye className="size-4" />
                            }
                        </button>
                    )}
                </div>
            )}

            {error && (
                <span className="text-red-600 text-xs mt-1">
                    {error}
                </span>
            )}
        </div>
    );
}