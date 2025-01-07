"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// Define the type for chart data
interface ChartData {
  network: string;
  eth: number;
  usdt: number;
}

// Define chart data
const chartData: ChartData[] = [
  { network: "Ethereum Mainnet", eth: 186, usdt: 80 },
  { network: "Polygon", eth: 305, usdt: 200 },
  { network: "Arbitrum", eth: 237, usdt: 120 },
  { network: "Optimism", eth: 73, usdt: 190 },
  { network: "Binance Smart Chain", eth: 209, usdt: 130 },
  { network: "Avalanche", eth: 214, usdt: 140 },
];

// Define the chart configuration
const chartConfig: ChartConfig = {
  eth: {
    label: "ETH",
    color: "#2563eb",
  },
  usdt: {
    label: "USDT",
    color: "#f97316",
  },
};

const Market: React.FC = () => {
  const [hoveredData, setHoveredData] = useState<ChartData | null>(null);

  const handleMouseOver = (data: ChartData | undefined) => {
    setHoveredData(data || null);
  };

  const handleMouseOut = () => {
    setHoveredData(null);
  };

  return (
    <Card className="shadow-none">
      {/* Card Header */}
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Today's Crypto Market Overview
        </CardTitle>
        <CardDescription>
          This chart provides a snapshot of the current activity across major
          networks under the Ethereum ecosystem. It highlights the volume of ETH
          and USDT transactions on popular networks like Ethereum Mainnet,
          Polygon, Arbitrum, and more. Use this data to assess network
          performance and market trends at a glance.
        </CardDescription>
      </CardHeader>

      {/* Persistent Coin Price Display */}
      <div className="p-4 text-center">
        {hoveredData ? (
          <p className="text-lg font-semibold">
            {hoveredData.network}: ETH - {hoveredData.eth}, USDT -{" "}
            {hoveredData.usdt}
          </p>
        ) : (
          <p className="text-gray-500">Hover over a bar to see details</p>
        )}
      </div>

      {/* Card Content */}
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            onMouseMove={(state) =>
              handleMouseOver(state?.activePayload?.[0]?.payload as ChartData)
            }
            onMouseLeave={handleMouseOut}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="network"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="eth" fill="#2563eb" radius={4} /> {/* bg-blue-600 */}
            <Bar dataKey="usdt" fill="#f97316" radius={4} />{" "}
            {/* bg-orange-600 */}
          </BarChart>
        </ChartContainer>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-500">Data updated as of today</p>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View more details
        </a>
      </CardFooter>
    </Card>
  );
};

export default Market;
