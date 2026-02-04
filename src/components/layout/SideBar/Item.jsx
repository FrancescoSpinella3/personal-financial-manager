export default function Item({ icon, label }) {
    return (
        <div className="flex rounded px-4 py-3 font-light text-zinc-200 gap-3 cursor-pointer hover:bg-zinc-800 transition-colors duration-200 ease-in">
            {icon}
            <span>{label}</span>
        </div>
    );
}