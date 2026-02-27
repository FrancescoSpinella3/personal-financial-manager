export default function Section({ children, sectionTitle }) {
    return (
        <section className="ml-82 p-7 pt-28">
            <h3 className="text-2xl font-semibold text-(--fourth-color) mb-10">
                {sectionTitle}
            </h3>

            {children}
        </section>
    );
}