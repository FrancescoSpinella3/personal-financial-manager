export default function Input({ 
    label, 
    inputType, 
    select,
    placeholder, 
    value, 
    onChange, 
    error, 
    ...props 
}) {

    // Default classes for label and input
    let labelClasses = "font-semibold text-sm mb-1 text-(--dark-main-color)";
    let inputClasses = "p-2 border border-(--dark-fourth-color) rounded-md bg-gray-50 focus:outline-(--third-color)";

    // Add a class if there is an error
    if (error) {
        labelClasses += ' text-red-600';
    }

    if (error) {
        inputClasses += ' border-red-600';
    }

    return (
        <div className="flex flex-col w-full">
            <label 
                className={labelClasses}
            >
                {label}
            </label>

            {select ? (
                <select
                    className={inputClasses}
                    value={value}
                    onChange={onChange}
                    {...props}
                >
                    <option value="" disabled >Seleziona un'opzione</option>
                    <option value="Maschio">Maschio</option>
                    <option value="Femmina">Femmina</option>
                </select>
            ) : (
                <input 
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
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