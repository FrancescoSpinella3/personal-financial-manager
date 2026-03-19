import ContainerItem from "./ContainerItem";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { currencyFormatter } from "../../../util/currencyFormatter";
import { CalendarDays, ChevronDown } from "lucide-react";

const COLORS = ["#432dd7", "#EF3463", "#fed920"];

export default function SummaryBalance() {
    // I valori vengono presi direttamente da questo componente
    const income = 25000.0;
    const expense = 12000.0;
    const save = 8000.0;

    const chartData = [
        { name: "Entrate", value: income },
        { name: "Uscite", value: expense },
        { name: "Risparmi", value: save },
    ];

    return (
        <ContainerItem title="Bilancio Totale">
            <div className="grid grid-cols-2 items-center w-full">
                <div className="w-full h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                                {chartData.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => currencyFormatter.format(value)} />
                            {/* <Legend verticalAlign="bottom" height={36} /> */}
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 text-sm bg-gray-200 hover:bg-gray-300 duration-200 ease-in p-3 rounded-md cursor-pointer">
                            <CalendarDays className="size-5 stroke-[1.5]" />
                            <p>Utimo mese</p>
                            <ChevronDown className="size-4 stroke-[1.5]" />
                        </button>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center justify-between text-lg mb-2">
                            <p className="text-(--dark-second-color)">Entrate</p>
                            <p className="font-semibold text-(--fourth-color)">{currencyFormatter.format(income)}</p>
                        </div>
                        <div className="flex items-center justify-between text-lg mb-2">
                            <p className="text-(--dark-second-color)">Uscite</p>
                            <p className="font-semibold text-(--fourth-color)">{currencyFormatter.format(expense)}</p>
                        </div>
                        <div className="flex items-center justify-between text-lg">
                            <p className="text-(--dark-second-color)">Risparmi</p>
                            <p className="font-semibold text-(--fourth-color)">{currencyFormatter.format(save)}</p>
                        </div>
                    </div>

                </div>
            </div>
        </ContainerItem>
    );
}