import { ArrowRightLeft, CalendarSync, Goal, LayoutGrid, Settings, Tags } from "lucide-react";

export default function Section({ children, sectionTitle }) {
    let sectionTitleIcon;
    const iconClasses = 'size-7'

    switch (sectionTitle) {
        case "Dashboard":
            sectionTitleIcon = <LayoutGrid className={iconClasses} />;
            break;
        case "Transazioni":
            sectionTitleIcon = <ArrowRightLeft className={iconClasses} />;
            break; 
        case "Abbonamenti":
            sectionTitleIcon = <CalendarSync className={iconClasses} />;
            break; 
        case "Obiettivi":
            sectionTitleIcon = <Goal className={iconClasses} />;
            break;
        case "Categorie":
            sectionTitleIcon = <Tags className={iconClasses} />;
            break;        
        case "Gestione Account":
            sectionTitleIcon = <Settings className={iconClasses} />;
            break;

    }

    return (
        <section className="ml-82 p-7 pt-28">
            <div className="flex items-center gap-3 mb-10 text-(--fourth-color) text-2xl font-semibold">
                {/* Icon */}
                {sectionTitleIcon}

                {/* Section Title */}
                <h3>{sectionTitle}</h3>
            </div>

            {children}
        </section>
    );
}