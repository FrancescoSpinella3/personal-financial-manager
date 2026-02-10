import { useAuth } from "../../context/AuthContext";
import Section from "../ui/Section";


export default function Dashboard() {
    const { user } = useAuth();

    return (
        <Section>
            <h1 className="text-black">Bentornato {user?.name}</h1>
        </Section>
    );
}