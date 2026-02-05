export default function Form({ children }) {
    return (
        <form className="w-full flex flex-col gap-7 mb-10">
            {children}
        </form>
    );
}