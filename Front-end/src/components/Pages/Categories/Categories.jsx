import Section from "../../ui/Section";
import { categories } from "../../../data/categories";
import CategoryCard from "./CategoryCard";
import ContainerCategory from "./ContainerCategory";
import { useState } from "react";
import AddCategoryModal from "../../ui/Modals/AddCategoryModal";

export default function Categories({ onClose }) {
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

    const incomes = categories.filter(category => category.type === "income");
    const expenses = categories.filter(category => category.type === "expense");
    const saves = categories.filter(category => category.type === "save");

    return (
        <Section sectionTitle="Categorie">
            <div className="flex gap-7">
                {/* Expenses */}
                <ContainerCategory catergoryName="Uscite" onAdd={() => setShowAddCategoryModal(true)}>
                    {expenses.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>
                
                {/* Incomes */}
                <ContainerCategory catergoryName="Entrate" onAdd={() => setShowAddCategoryModal(true)}>
                    {incomes.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>

                {/* Saves */}
                <ContainerCategory catergoryName="Risparmi" onAdd={() => setShowAddCategoryModal(true)}>
                    {saves.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>
            </div>

            {showAddCategoryModal && (
                <AddCategoryModal 
                    onShow={showAddCategoryModal} 
                    onClose={() => setShowAddCategoryModal(false)} 
                />
            )}
        </Section>
    );
}