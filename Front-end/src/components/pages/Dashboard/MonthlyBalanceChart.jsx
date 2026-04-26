import { useContext } from "react";
import {
    AreaChart,
    Area,
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

const data = monthLabels.map((month, i) => ({
    month,
    Entrate:  [3200, 2800, 3500, 3100, 2900, 3400, 3600, 3000, 3300, 3100, 2700, 3800][i],
    Uscite:   [1800, 2100, 1600, 2000, 1700, 1900, 2200, 1500, 1800, 2100, 1600, 2400][i],
    Risparmi: [900,  500,  1200, 800,  900,  1000, 800,  1100, 900,  700,  700,  900 ][i],
}));

const fmt = (v) => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(v);

const series = [
    { key: "Entrate",  color: "#432dd7" },
    { key: "Uscite",   color: "#EF3463" },
    { key: "Risparmi", color: "#22c55e" },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-(--light-bg-container) dark:bg-(--dark-bg-container) border border-(--light-border-color) dark:border-(--dark-border-color) rounded-xl p-3 shadow-lg text-sm">
            <p className="font-semibold mb-2 text-(--dark-main-color) dark:text-(--light-color)">{label}</p>
            {payload.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: entry.color }} />
                    <span className="text-(--dark-third-color)">{entry.name}:</span>
                    <span className="font-medium text-(--dark-main-color) dark:text-(--light-color)">{fmt(entry.value)}</span>
                </div>
            ))}
        </div>
    );
};

export default function MonthlyBalanceChart() {
    const { theme } = useContext(ThemeContext);
    const tickColor = theme === "light" ? "#888888" : "#9ca3af";
    const gridColor = theme === "light" ? "#e5e7eb" : "#374151";

    return (
        <div className="bg-(--light-bg-container) dark:bg-(--dark-bg-container) p-5 rounded-lg border border-(--light-border-color) dark:border-(--dark-border-color) min-w-0">
            <p className="text-sm text-(--dark-third-color)">FLUSSO ANNUALE</p>
            <h4 className="mb-4 text-2xl font-semibold text-(--dark-main-color) dark:text-(--light-color)">{currentYear}</h4>

            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={data} margin={{ left: -15, right: 4, top: 4 }}>
                    <defs>
                        {series.map(({ key, color }) => (
                            <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                                <stop offset="100%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        ))}
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12, fill: tickColor }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        width={45}
                        tick={{ fontSize: 11, fill: tickColor }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: gridColor, strokeWidth: 1 }} />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                    />

                    {series.map(({ key, color }) => (
                        <Area
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stroke={color}
                            strokeWidth={2}
                            fill={`url(#grad-${key})`}
                            dot={false}
                            activeDot={{ r: 4, strokeWidth: 0 }}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
