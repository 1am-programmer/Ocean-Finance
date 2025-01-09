"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
} from "recharts";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface MultiCoinMarketData {
  date: string;
  ethOpen: number;
  ethHigh: number;
  ethLow: number;
  ethClose: number;
  usdtOpen: number;
  usdtHigh: number;
  usdtLow: number;
  usdtClose: number;
  ethVolume: number;
  usdtVolume: number;
}

// Define mock market data
const marketData: MultiCoinMarketData[] = [
  {
    date: "2025-01-01",
    ethOpen: 1800,
    ethHigh: 1900,
    ethLow: 1750,
    ethClose: 1850,
    usdtOpen: 1,
    usdtHigh: 1.02,
    usdtLow: 0.99,
    usdtClose: 1.01,
    ethVolume: 500,
    usdtVolume: 800,
  },
  {
    date: "2025-01-02",
    ethOpen: 1850,
    ethHigh: 1950,
    ethLow: 1800,
    ethClose: 1900,
    usdtOpen: 1.01,
    usdtHigh: 1.03,
    usdtLow: 0.98,
    usdtClose: 1,
    ethVolume: 600,
    usdtVolume: 850,
  },
  {
    date: "2025-01-03",
    ethOpen: 1900,
    ethHigh: 2000,
    ethLow: 1850,
    ethClose: 1950,
    usdtOpen: 1,
    usdtHigh: 1.04,
    usdtLow: 0.97,
    usdtClose: 1.02,
    ethVolume: 700,
    usdtVolume: 780,
  },
  {
    date: "2025-01-04",
    ethOpen: 1950,
    ethHigh: 2050,
    ethLow: 1900,
    ethClose: 2000,
    usdtOpen: 1.02,
    usdtHigh: 1.05,
    usdtLow: 0.98,
    usdtClose: 1.03,
    ethVolume: 650,
    usdtVolume: 820,
  },
  {
    date: "2025-01-05",
    ethOpen: 2000,
    ethHigh: 2100,
    ethLow: 1950,
    ethClose: 2050,
    usdtOpen: 1.03,
    usdtHigh: 1.06,
    usdtLow: 1,
    usdtClose: 1.05,
    ethVolume: 550,
    usdtVolume: 870,
  },
];

const formatTooltip = (value: number, name: string) => [
  `${value}`,
  name.toUpperCase(),
];

const MarketChart: React.FC = () => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Ethereum Network Market Overview
        </CardTitle>
        <CardDescription>
          A multi-coin chart showing price movements (Open, High, Low, Close)
          and trading volumes for ETH and USDT under the Ethereum network.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={formatTooltip} />
            <Legend />

            {/* ETH Price Line */}
            <Line
              type="monotone"
              dataKey="ethClose"
              name="ETH Close"
              stroke="#2563eb"
              dot={false}
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="usdtClose"
              name="USDT Close"
              stroke="#f97316"
              dot={false}
              activeDot={{ r: 8 }}
            />

            <Bar
              dataKey="ethVolume"
              name="ETH Volume"
              fill="#60a5fa"
              opacity={0.7}
              barSize={8}
            />

            <Bar
              dataKey="usdtVolume"
              name="USDT Volume"
              fill="#fdba74"
              opacity={0.7}
              barSize={8}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>

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

export default MarketChart;
