import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

const Visual3 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const trendData = [
    { month: "Jan", income: 15000, expenses: 2850, savings: 12150 },
    { month: "Feb", income: 16200, expenses: 2730, savings: 13470 },
    { month: "Mar", income: 17500, expenses: 2490, savings: 15010 },
    { month: "Apr", income: 16800, expenses: 2970, savings: 13830 },
    { month: "May", income: 15900, expenses: 3000, savings: 12900 },
    { month: "Jun", income: 15300, expenses: 2630, savings: 12670 },
  ];

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <h4 className="text-2xl font-bold mb-1">Financial Overview</h4>
      <div className="flex justify-between mb-6">
        <div className="text-sm">
          <div className="flex items-center mb-1">
            <div
              className="w-3 h-3 mr-2"
              style={{ backgroundColor: colorState.primaryColor.scale[800] }}
            ></div>
            <span>Income</span>
          </div>
          <div className="flex items-center mb-1">
            <div
              className="w-3 h-3 mr-2"
              style={{
                backgroundColor: colorState.secondaryColor.isAdded
                  ? colorState.secondaryColor.scale[600]
                  : colorState.primaryColor.scale[400],
              }}
            ></div>
            <span>Expenses</span>
          </div>
          <div className="flex items-center">
            <div
              className="w-3 h-3 mr-2"
              style={{
                backgroundColor: colorState.tertiaryColor.isAdded
                  ? colorState.tertiaryColor.scale[500]
                  : colorState.primaryColor.scale[600],
              }}
            ></div>
            <span>Savings</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-semibold">
            $
            {trendData
              .reduce((sum, item) => sum + item.savings, 0)
              .toLocaleString()}
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            Total Savings
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={trendData}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: isDarkMode ? "#d4d4d4" : "#737373",
            }}
          />
          <Line
            type="natural"
            dataKey="income"
            stroke={colorState.primaryColor.scale[800]}
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="expenses"
            stroke={
              colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[500]
                : colorState.primaryColor.scale[400]
            }
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="natural"
            dataKey="savings"
            stroke={
              colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[600]
                : colorState.primaryColor.scale[600]
            }
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Visual3;
