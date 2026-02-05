export default function FormButton({ children }) {
    return (
        <button
        type="submit"
            className="bg-indigo-500 text-white font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-600 duration-200 ease-in"
        >
            {children}
        </button>
    );
}