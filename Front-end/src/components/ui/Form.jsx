export default function Form({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-7 mb-10">
            {children}
        </form>
    );
}