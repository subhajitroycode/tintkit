import React, { useContext } from "react";
import { BarChart, ResponsiveContainer, XAxis, Bar } from "recharts";
import { ColorContext } from "../../../../contexts/colorContext";

const Visual1 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const weeklyData = [
    { week: "Week 1", strength: 45, cardio: 60, flexibility: 20 },
    { week: "Week 2", strength: 60, cardio: 75, flexibility: 25 },
    { week: "Week 3", strength: 50, cardio: 90, flexibility: 30 },
    { week: "Week 4", strength: 75, cardio: 80, flexibility: 35 },
    { week: "Week 5", strength: 85, cardio: 70, flexibility: 40 },
    { week: "Week 6", strength: 90, cardio: 85, flexibility: 45 },
  ];

  const totalMinutes = weeklyData.reduce((total, week) => {
    return total + week.strength + week.cardio + week.flexibility;
  }, 0);

  const gapSize = 0.08; // 8% gap
  const workoutData = weeklyData.map((week) => {
    return {
      week: week.week,
      strength: week.strength * (1 - gapSize),
      strengthGap: week.strength * gapSize,
      cardio: week.cardio * (1 - gapSize),
      cardioGap: week.cardio * gapSize,
      flexibility: week.flexibility * (1 - gapSize),
    };
  });

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <div className="mb-1">
        <h2 className="text-2xl font-bold">Workout Progress</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          6-Week Training Program
        </p>
      </div>
      <div className="text-xl font-semibold mb-6">
        {Math.floor(totalMinutes / 60)} hours {totalMinutes % 60} minutes
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={workoutData}
          margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
          barSize={25}
        >
          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDarkMode ? "#d4d4d4" : "#737373", fontSize: 12 }}
            dy={10}
          />
          <Bar
            dataKey="strength"
            stackId="stack"
            fill={colorState.primaryColor.scale[900]}
            radius={[4, 4, 0, 0]}
          />
          <Bar dataKey="strengthGap" stackId="stack" fill="transparent" />
          <Bar
            dataKey="cardio"
            stackId="stack"
            fill={
              colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[600]
                : colorState.primaryColor.scale[600]
            }
            radius={4}
          />
          <Bar dataKey="cardioGap" stackId="stack" fill="transparent" />
          <Bar
            dataKey="flexibility"
            stackId="stack"
            fill={
              colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[300]
                : colorState.primaryColor.scale[300]
            }
            radius={[0, 0, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Visual1;
