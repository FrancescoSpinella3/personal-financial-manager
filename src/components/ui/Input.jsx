export default function Input({ label, inputType, placeholder }) {
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
                className="p-2 border border-gray-300 rounded-md bg-indigo-50"
            />
        </p>
    );
}