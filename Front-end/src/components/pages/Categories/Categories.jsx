import Section from "../../ui/Section";
import { categories } from "../../../data/categories";
import CategoryCard from "./CategoryCard";
import ContainerCategory from "./ContainerCategory";
import { useState } from "react";
import CategoryModal from "../../ui/Modals/CategoryModal";

export default function Categories() {
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

    const incomes = categories.filter(category => category.type === "income");
    const expenses = categories.filter(category => category.type === "expense");
    const saves = categories.filter(category => category.type === "save");

    return (
        <Section sectionTitle="Categorie">
            <div className="flex flex-col gap-7">
                {/* Incomes */}
                <ContainerCategory categoryName="Entrate" onAdd={() => setShowAddCategoryModal(true)}>
                    {incomes.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>

                {/* Expenses */}
                <ContainerCategory categoryName="Uscite" onAdd={() => setShowAddCategoryModal(true)}>
                    {expenses.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>

                {/* Saves */}
                <ContainerCategory categoryName="Risparmi" onAdd={() => setShowAddCategoryModal(true)}>
                    {saves.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>
            </div>

            {/* Show add new category modal */}
            {showAddCategoryModal && (
                <CategoryModal
                    title="Aggiungi una nuova categoria"
                    subText="Inserisci il nome e l'icona della categoria"
                    textButton="Aggiungi"
                    onShow={showAddCategoryModal}
                    onClose={() => setShowAddCategoryModal(false)}
                />
            )}
        </Section>
    );
}