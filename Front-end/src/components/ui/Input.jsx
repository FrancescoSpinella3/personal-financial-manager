export default function Input({ label, inputType, placeholder, value, onChange, error }) {


    let labelClasses = "font-semibold text-sm mb-1";
    let inputClasses = "p-2 border border-gray-300 rounded-md bg-indigo-50 focus:outline-indigo-500";

    if (error) {
        labelClasses += ' text-red-600';
    }

    if (error) {
        inputClasses += ' border-red-600';
    }

    return (
        <div className="flex flex-col">
            <label 
                className={labelClasses}
            >
                {label}
            </label>
            
            <input 
                type={inputType}
                placeholder={placeholder}
                // required
                value={value}
                onChange={onChange}
                className={inputClasses}
            />

            {error && (
                <span className="text-red-600 text-xs mt-1">
                    {error}
                </span>
            )}

        </div>
    );
}