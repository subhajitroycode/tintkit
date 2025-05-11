import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";

const Visual5 = () => {
  const { state: colorState } = useContext(ColorContext);

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold mb-3">Task List</h3>
      <div className="p-4 rounded-xl shadow-md bg-neutral-100 dark:bg-neutral-800">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-lg">Today's Tasks</h4>
          <button
            className="text-sm px-3 py-1 rounded-md text-white"
            style={{ backgroundColor: colorState.primaryColor.scale[700] }}
          >
            + Add Task
          </button>
        </div>

        <div className="space-y-2">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: colorState.primaryColor.scale[200] }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="mt-1">
                  <input type="checkbox" className="rounded text-blue-500" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-neutral-900">
                    Finish project proposal
                  </h5>
                  <p className="text-sm text-gray-500 mt-1">
                    Due today at 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[200]
                : colorState.primaryColor.scale[200],
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="mt-1">
                  <input type="checkbox" className="rounded text-blue-500" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-neutral-900">
                    Review marketing materials
                  </h5>
                  <p className="text-sm text-gray-500 mt-1">
                    Due today at 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[200]
                : colorState.primaryColor.scale[200],
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="mt-1">
                  <input type="checkbox" className="rounded text-blue-500" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-neutral-900">
                    Prepare for client meeting
                  </h5>
                  <p className="text-sm text-gray-500 mt-1">
                    Due tomorrow at 10:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-sm rounded-lg w-full mt-1"
              style={{
                backgroundColor: colorState.secondaryColor.isAdded
                  ? colorState.secondaryColor.scale[100]
                  : colorState.primaryColor.scale[100],
                color: colorState.secondaryColor.isAdded
                  ? colorState.secondaryColor.scale[800]
                  : colorState.primaryColor.scale[800],
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual5;
