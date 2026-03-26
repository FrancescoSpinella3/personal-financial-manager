export default function ContainerItem({ children, title, className }) {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <h4 className="mb-3 text-xl font-medium text-(--dark-second-color) dark:text-(--light-color)">{title}</h4>
            <div className="bg-(--light-color) dark:bg-(--bg-dark-container) p-5 rounded-md border border-(--dark-fourth-color) dark:border-(--border-dark) shadow-md w-full flex-1">
                {children}
            </div>
        </div>
    );
}