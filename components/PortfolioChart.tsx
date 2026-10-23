"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export type ChartPoint = {
  måned: string;
  værdi: number;
};

type Props = {
  title?: string;
  total: number;
  gain: number;
  gainPct: number;
  data: ChartPoint[];
};

const kr = (n: number) => n.toLocaleString("da-DK") + " kr.";
const pct = (n: number) =>
  n.toLocaleString("da-DK", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }) + "%";

export default function PortfolioChart({
  title = "Eksempel på en portefølje",
  total,
  gain,
  gainPct,
  data,
}: Props) {
  const positive = gain >= 0;

  return (
    <div className="rounded-xl border border-[#D5D9D0] bg-white p-6 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#4A554F]">
        {title}
      </p>

      <p className="mt-1 font-mono text-4xl font-medium tabular-nums ">
        {kr(total)}
      </p>

      <p
        className={`font-mono font-medium tabular-nums ${
          positive ? "text-[#0E6B3F]" : "text-[#B3261E]"
        }`}
      >
        {positive ? "+" : ""}
        {kr(gain)} · {positive ? "+" : ""}
        {pct(gainPct)}
      </p>

      <div className="mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="måned"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4A554F", fontSize: 13 }}
            />
            <Tooltip
              formatter={(v) => kr(Number(v))}
              labelClassName="font-semibold"
            />
            <Area
              type="linear"
              dataKey="værdi"
              stroke="#0E5C45"
              strokeWidth={3}
              fill="#DCEBE3"
              dot={{ r: 4, fill: "#0E5C45", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
