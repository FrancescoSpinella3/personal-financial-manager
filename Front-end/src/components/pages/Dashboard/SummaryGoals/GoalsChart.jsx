import { useContext } from "react";
import { ThemeContext } from "../../../../context/themeContext";
import { currencyFormatter } from "../../../../util/currencyFormatter";

const r = 72;
const cx = 100;
const cy = 100;
const arcLength = Math.PI * r;

export default function GoalsChart() {
    const { theme } = useContext(ThemeContext);

    const targetAmount = 2350;
    const currentAmount = 1720;
    const percentage = Math.min(currentAmount / targetAmount, 1);
    const dashoffset = arcLength * (1 - percentage);

    const trackColor = theme === "light" ? "#e5e7eb" : "#374151";
    const textColor  = theme === "light" ? "#111827" : "#f9fafb";

    return (
        <div className="flex flex-col items-center">
            <svg viewBox="0 20 200 118" className="w-full">
                <defs>
                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#432dd7" />
                        <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                </defs>

                {/* Background track */}
                <path
                    d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth="13"
                    strokeLinecap="round"
                />

                {/* Progress arc */}
                {percentage > 0 && (
                    <path
                        d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`}
                        fill="none"
                        stroke="url(#gaugeGrad)"
                        strokeWidth="13"
                        strokeLinecap="round"
                        strokeDasharray={arcLength}
                        strokeDashoffset={dashoffset}
                    />
                )}

                {/* Percentage */}
                <text
                    x={cx}
                    y={cy - 22}
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="700"
                    fill={textColor}
                >
                    {Math.round(percentage * 100)}%
                </text>

                {/* Current / target */}
                <text x={cx} y={cy - 5} textAnchor="middle" fontSize="8" fill="#9ca3af">
                    {currencyFormatter.format(currentAmount)} di {currencyFormatter.format(targetAmount)}
                </text>

                {/* Min / max labels */}
                <text x={cx - r + 2} y={cy + 15} textAnchor="start" fontSize="10" fill="#9ca3af">
                    €0
                </text>
                <text x={cx + r - 2} y={cy + 15} textAnchor="end" fontSize="10" fill="#9ca3af">
                    {currencyFormatter.format(targetAmount)}
                </text>
            </svg>

            <p className="text-sm font-medium text-(--dark-main-color) dark:text-(--light-color)">
                Raggiunto vs Target
            </p>
        </div>
    );
}
