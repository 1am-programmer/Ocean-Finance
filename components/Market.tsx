"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { network: "Ethereum Mainnet", ETH: 186, USDT: 80 },
  { network: "Polygon", ETH: 305, USDT: 200 },
  { network: "Arbitrum", ETH: 237, USDT: 120 },
  { network: "Optimism", ETH: 73, USDT: 190 },
  { network: "Binance Smart Chain", ETH: 209, USDT: 130 },
  { network: "Avalanche", ETH: 214, USDT: 140 },
];

const chartConfig = {
  eth: {
    label: "ETH",
    color: "#2563eb",
  },
  usdt: {
    label: "USDT",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Market = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default Market;
