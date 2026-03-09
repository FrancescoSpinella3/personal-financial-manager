import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { goals } from "../../../data/goals";
import { categories } from "../../../data/categories";
import { currencyFormatter } from "../../../util/currencyFormatter";

const COLORS_GOAL = ["#432dd7", "#EF3463", "#fed920"];
const COLORS_CURRENT = ["#432dd7", "#EF3463", "#fed920"];

function buildChartData() {
    const groups = { income: { label: "Entrate", goal: 0, current: 0 }, expense: { label: "Uscite", goal: 0, current: 0 }, save: { label: "Risparmi", goal: 0, current: 0 } };

    for (const g of goals) {
        const cat = categories.find(c => c.id === g.id);
        if (!cat) continue;
        const group = groups[cat.type];
        if (!group) continue;
        group.goal += g.userGoal;
        group.current += g.currentValue;
    }

    const goalData = Object.values(groups).map(g => ({ name: g.label, value: g.goal }));
    const currentData = Object.values(groups).map(g => ({ name: g.label, value: g.current }));
    return { goalData, currentData };
}

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const { name, value } = payload[0];
    return (
        <div className="bg-(--light-color) border border-(--dark-fourth-color) rounded-md p-3 shadow-md text-sm">
            <p className="font-semibold text-(--dark-main-color)">{name}</p>
            <p style={{ color: payload[0].payload.fill }}>{currencyFormatter.format(value)}</p>
        </div>
    );
};

const renderLabel = ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`;

export default function GoalsChart() {
    const { goalData, currentData } = buildChartData();

    return (
        <div className="grid grid-cols-2 gap-5 mb-10">
            {/* Pie Obiettivi */}
            <div className="bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md">
                <p className="font-medium text-(--dark-main-color) mb-3 text-center">Il mio obiettivo</p>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={goalData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={renderLabel} labelLine={false}>
                            {goalData.map((_, i) => <Cell key={i} fill={COLORS_GOAL[i]} />)}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: 14 }} formatter={(value) => <span className="text-(--dark-second-color)">{value}</span>} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Valore Corrente */}
            <div className="bg-(--light-color) p-5 rounded-md border border-(--dark-fourth-color) shadow-md">
                <p className="font-medium text-(--dark-main-color) mb-3 text-center">Valore attuale</p>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={currentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={renderLabel} labelLine={false}>
                            {currentData.map((_, i) => <Cell key={i} fill={COLORS_CURRENT[i]} />)}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: 14 }} formatter={(value) => <span className="text-(--dark-second-color)">{value}</span>} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
