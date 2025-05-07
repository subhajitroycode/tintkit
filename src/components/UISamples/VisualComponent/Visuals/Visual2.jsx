import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { ColorContext } from "../../../../contexts/colorContext";

const Visual2 = () => {
  const { state: colorState } = useContext(ColorContext);

  const pieData = [
    { name: "Groceries", value: 5000 },
    { name: "Rent", value: 8000 },
    { name: "Utilities", value: 1500 },
    { name: "Transportation", value: 1000 },
  ];

  const COLORS = [
    colorState.primaryColor.scale[600],
    colorState.secondaryColor.isAdded
      ? colorState.secondaryColor.scale[800]
      : colorState.primaryColor.scale[800],
    colorState.primaryColor.scale[400],
    colorState.tertiaryColor.isAdded
      ? colorState.tertiaryColor.scale[500]
      : colorState.secondaryColor.isAdded
      ? colorState.secondaryColor.scale[500]
      : colorState.primaryColor.scale[200],
  ];
  const totalExpenses = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold mb-1">Expenses</h3>

      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={nanoid()} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-semibold text-xl">
              $ {totalExpenses.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {pieData.map((entry, index) => (
          <div key={nanoid()} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span>{entry.name}</span>
            </div>
            <span>$ {entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visual2;
