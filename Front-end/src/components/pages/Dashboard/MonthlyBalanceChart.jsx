import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/themeContext";

const currentYear = new Date().getFullYear();

const monthLabels = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

// Dati placeholder – sostituire con dati reali dall'API
const data = monthLabels.map((month, i) => ({
    month,
    Entrate: [3200, 2800, 3500, 3100, 2900, 3400, 3600, 3000, 3300, 3100, 2700, 3800][i],
    Uscite:  [1800, 2100, 1600, 2000, 1700, 1900, 2200, 1500, 1800, 2100, 1600, 2400][i],
    Risparmi:[900,  500,  1200, 800,  900,  1000, 800,  1100, 900,  700,  700,  900 ][i],
}));

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-(--light-color) border border-(--dark-fourth-color) rounded-md p-3 shadow-md text-sm">
            <p className="font-semibold mb-1">{label}</p>
            {payload.map((entry) => (
                <p key={entry.name} style={{ color: entry.color }}>
                    {entry.name}: {new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(entry.value)}
                </p>
            ))}
        </div>
    );
};

export default function MonthlyBalanceChart() {
    const { theme } = useContext(ThemeContext);
    const tickColor = theme === "light" ? "#555555" : "#c0c0c0"

    return (
        <div className="flex flex-col w-full">
            <h4 className="text-xl font-medium text-(--dark-second-color) dark:text-(--light-color) mb-3">
                Riepilogo {currentYear}
            </h4>
            <div className="bg-(--light-color) dark:bg-(--bg-dark-container) p-5 rounded-md border border-(--dark-fourth-color) dark:border-(--border-dark) shadow-md min-w-0">
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={data} barSize={12} barCategoryGap="30%" barGap={3}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#D1D1D1" vertical={false} />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: tickColor }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 11, fill: "#939393" }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
                        <Legend
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                        />
                        <Bar dataKey="Entrate"  fill="#432dd7" radius={[5, 4, 0, 0]} />
                        <Bar dataKey="Uscite"   fill="#EF3463" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="Risparmi" fill="#22c55e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
