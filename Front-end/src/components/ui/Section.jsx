import { ArrowRightLeft, Goal, LayoutGrid, RefreshCw, Settings, Tags } from "lucide-react";

export default function Section({ children, sectionTitle }) {
    return (
        <section className="px-5 pb-5 md:px-7 md:pb-7 pt-28">
            <div className="flex items-center gap-3 mb-10 text-(--dark-main-color) dark:text-(--light-color) text-3xl font-bold">
                {/* Section Title */}
                <h3>{sectionTitle}</h3>
            </div>

            {children}
        </section>
    );
}