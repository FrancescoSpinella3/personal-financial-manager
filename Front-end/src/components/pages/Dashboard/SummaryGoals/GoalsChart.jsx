import { PieChart, Cell, Pie, ResponsiveContainer } from "recharts";
import { currencyFormatter } from "../../../../util/currencyFormatter";

export default function GoalsChart() {
    const targetAmount = 2350;
    const currentAmount = 1720;
    const remaining = targetAmount - currentAmount;

    const gaugeData = [
        { name: "Raggiunto", value: currentAmount },
        { name: "Rimanente", value: remaining },
    ];

    const COLORS = ["#1055C9", "#e0e0e0"];

    return (
        <div className="flex flex-col items-center justify-center">
            <ResponsiveContainer width={250} height={120}>
                <PieChart>
                    <Pie
                        data={gaugeData}
                        innerRadius={60}
                        outerRadius={85}
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        strokeWidth={0}
                        cx="50%"
                        cy="85%"
                    >
                        {gaugeData.map((entry, index) => (
                            <Cell key={entry.name} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <text 
                        x="50%"
                        y="80%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        className="font-semibold fill-(--dark-main-color) dark:fill-(--light-color)"
                    >
                        {currencyFormatter.format(currentAmount)}
                    </text>
                    <text 
                        x="8%" 
                        y="100%" 
                        textAnchor="start" 
                        className="text-xs" 
                        fill="var(--dark-third-color)"
                    >
                        {currencyFormatter.format(0)}
                    </text>
                    <text 
                        x="92%" 
                        y="100%" 
                        textAnchor="end" 
                        className="text-xs" 
                        fill="var(--dark-third-color)"
                    >
                        {currencyFormatter.format(targetAmount)}
                    </text>
                </PieChart>
            </ResponsiveContainer>

            <p className="text-xs font-medium text-(--dark-main-color) dark:text-(--light-color) mt-5">
                Raggiunto vs Target
            </p>
        </div>
    );
}