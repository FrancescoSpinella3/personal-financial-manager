export default function Section({ children, sectionTitle }) {
    return (

        // Da sistemare
        <section className="ml-82 p-10">
            <h3 className="text-2xl font-bold text-indigo-900 mb-10">
                {sectionTitle}
            </h3>

            {children}
        </section>
    );
}