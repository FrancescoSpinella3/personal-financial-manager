export default function ContainerItem({ children, title, className }) {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <h4 className="mb-3 text-xl font-medium text-(--dark-second-color) dark:text-(--light-color)">{title}</h4>
            <div className="bg-(--light-bg-container) dark:bg-(--dark-bg-container) p-5 rounded-md shadow-md w-full flex-1">
                {children}
            </div>
        </div>
    );
}