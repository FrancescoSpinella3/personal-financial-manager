export default function ContainerItem({ title, children }) {
    return (
        <div>
            <h4>{title}</h4>
            <div className="bg-white rounded-md shadow-md">
                {children}
            </div>
        </div>
    );
}