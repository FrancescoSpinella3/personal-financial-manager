export default function Section({ children, sectionTitle }) {
    return (

        // Da sistemare
        <section className="ml-82 p-10 pt-28">
            <h3 className="text-2xl font-bold text-(--fourth-color) mb-10">
                {sectionTitle}
            </h3>

            {children}
        </section>
    );
}