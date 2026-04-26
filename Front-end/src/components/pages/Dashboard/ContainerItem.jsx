import ViewAllLink from "../../ui/ViewAllLink";

export default function ContainerItem({ children, title, subText, className, link, hideLink }) {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <div className={`bg-(--light-bg-container) dark:bg-(--dark-bg-container) p-5 border border-(--light-border-color) dark:border-(--dark-border-color) rounded-lg w-full flex-1 ${className}`}>
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm text-(--dark-third-color)">{subText}</p>
                        <h4 className="mb-3 text-xl font-semibold text-(--dark-main-color) dark:text-(--light-color)">{title}</h4>
                    </div>

                    {!hideLink && <ViewAllLink path={link} />}
                </div>

                {children}
            </div>
        </div>
    );
}