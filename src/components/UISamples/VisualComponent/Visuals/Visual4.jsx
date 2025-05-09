import React, { useContext } from "react";
import { FaClock, FaHeart, FaPersonWalking } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ColorContext } from "../../../../contexts/colorContext";
import { FaMapMarkerAlt } from "react-icons/fa";

const Visual4 = () => {
  const { state: colorState } = useContext(ColorContext);

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold mb-3">Fitness Tracking Widget</h3>
      <div className="p-4 rounded-xl shadow-md bg-neutral-100 dark:bg-neutral-800">
        <h4 className="font-bold text-lg mb-3">Fitness Metrics</h4>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colorState.primaryColor.scale[100] }}
              >
                <FaPersonWalking
                  style={{ color: colorState.primaryColor.scale[700] }}
                />
              </div>
              <div className="ml-3">
                <span className="font-semibold">Daily Steps</span>
                <p className="text-sm text-gray-500">8,746 steps today</p>
              </div>
            </div>
            <MdOutlineKeyboardArrowRight className="text-neutral-500" />
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: colorState.secondaryColor.isAdded
                    ? colorState.secondaryColor.scale[100]
                    : colorState.primaryColor.scale[100],
                }}
              >
                <FaMapMarkerAlt
                  style={{
                    color: colorState.secondaryColor.isAdded
                      ? colorState.secondaryColor.scale[700]
                      : colorState.primaryColor.scale[700],
                  }}
                />
              </div>
              <div className="ml-3">
                <span className="font-semibold">Distance</span>
                <p className="text-sm text-gray-500">6.2 km today</p>
              </div>
            </div>
            <MdOutlineKeyboardArrowRight className="text-neutral-500" />
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: colorState.tertiaryColor.isAdded
                    ? colorState.tertiaryColor.scale[100]
                    : colorState.primaryColor.scale[100],
                }}
              >
                <FaClock
                  style={{
                    color: colorState.tertiaryColor.isAdded
                      ? colorState.tertiaryColor.scale[700]
                      : colorState.primaryColor.scale[700],
                  }}
                />
              </div>
              <div className="ml-3">
                <span className="font-semibold">Active Time</span>
                <p className="text-sm text-gray-500">1h 24m today</p>
              </div>
            </div>
            <MdOutlineKeyboardArrowRight className="text-neutral-500" />
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colorState.primaryColor.scale[100] }}
              >
                <FaHeart
                  style={{ color: colorState.primaryColor.scale[700] }}
                />
              </div>
              <div className="ml-3">
                <span className="font-semibold">Calories Burned</span>
                <p className="text-sm text-gray-500">487 kcal today</p>
              </div>
            </div>
            <MdOutlineKeyboardArrowRight className="text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual4;
