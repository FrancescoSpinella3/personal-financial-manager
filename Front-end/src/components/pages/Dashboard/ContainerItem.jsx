export default function ContainerItem({ title, children }) {
    return (
        <div className="">
            <h4 className="font-medium text-xl text-(--dark-second-color) mb-2">{title}</h4>
            <div className="bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md flex flex-col items-center size-62">
                {children}
            </div>
        </div>
    );
}