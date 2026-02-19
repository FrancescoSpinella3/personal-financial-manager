import Section from "../../ui/Section";
import { categories } from "../../../data/categories";
import CategoryCard from "./CategoryCard";
import Button from "../../ui/Button"
import { Plus } from "lucide-react";
import ContainerCategory from "./ContainerCategory";

export default function Categories() {
    const incomes = categories.filter(category => category.type === "income");
    const expenses = categories.filter(category => category.type === "expense");
    const saves = categories.filter(category => category.type === "save");

    return (
        <Section sectionTitle="Categorie">
            <div className="flex gap-7">
                {/* Incomes */}
                <ContainerCategory catergoryName="Entrate">
                    {incomes.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>

                
                {/* Expenses */}
                <ContainerCategory catergoryName="Uscite">
                    {expenses.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>

                {/* Saves */}
                <ContainerCategory catergoryName="Risparmi">
                    {saves.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </ContainerCategory>
            </div>
        </Section>
    );
}