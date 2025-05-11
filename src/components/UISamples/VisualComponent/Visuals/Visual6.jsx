import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";

const Visual6 = () => {
  const { state: colorState } = useContext(ColorContext);

  return (
    <div className="w-full border bg-neutral-200 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-600 rounded-xl p-4 shadow-sm">
      <h3 className="text-2xl font-bold mb-3">Recent Messages</h3>

      <div className="p-4 rounded-xl shadow-md bg-neutral-100 dark:bg-neutral-800">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-lg">Messages</h4>
          <div className="flex space-x-2">
            <button
              className="p-1 rounded-md"
              style={{ backgroundColor: colorState.primaryColor.scale[100] }}
            >
              <FaEnvelope
                style={{ color: colorState.primaryColor.scale[500] }}
              />
            </button>
            <button
              className="p-1 rounded-md"
              style={{
                backgroundColor: colorState.tertiaryColor.isAdded
                  ? colorState.tertiaryColor.scale[100]
                  : colorState.secondaryColor.isAdded
                  ? colorState.secondaryColor.scale[100]
                  : colorState.primaryColor.scale[100],
              }}
            >
              <IoIosChatbubbles
                style={{
                  color: colorState.tertiaryColor.isAdded
                    ? colorState.tertiaryColor.scale[500]
                    : colorState.secondaryColor.isAdded
                    ? colorState.secondaryColor.scale[500]
                    : colorState.primaryColor.scale[500],
                }}
              />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start mb-1.5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <img
                src="/profile-8.png"
                alt="profile picture of a male model"
                className="rounded-full"
              />
            </div>
            <div className="ml-3 flex-grow">
              <div className="flex items-center">
                <span className="font-medium">Alex Thomson</span>
                <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                  11:32 AM
                </span>
              </div>
              <div
                className="p-3 mt-1 rounded-lg rounded-tl-none"
                style={{ backgroundColor: colorState.primaryColor.scale[200] }}
              >
                <p className="text-sm text-neutral-800">
                  Hey! Have you seen the latest design updates? I think they
                  look great!
                </p>
              </div>
              <div className="flex mt-1 text-xs">
                <button className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mr-3">
                  Reply
                </button>
                <button className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mr-3">
                  Forward
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-1.5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <img
                src="/profile-9.png"
                alt="profile picture of a female model"
                className="rounded-full"
              />
            </div>
            <div className="ml-3 flex-grow">
              <div className="flex items-center">
                <span className="font-medium">Celina Juarez</span>
                <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                  10:45 AM
                </span>
              </div>
              <div
                className="p-3 mt-1 rounded-lg rounded-tl-none"
                style={{
                  backgroundColor: colorState.secondaryColor.isAdded
                    ? colorState.secondaryColor.scale[200]
                    : colorState.primaryColor.scale[200],
                }}
              >
                <p className="text-sm text-neutral-800">
                  The team meeting is moved to 2pm today. Don't forget to bring
                  your quarterly report!
                </p>
              </div>
              <div className="flex mt-1 text-xs">
                <button className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mr-3">
                  Reply
                </button>
                <button className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 mr-3">
                  Forward
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <button
              className="px-4 py-2 text-sm rounded-lg"
              style={{
                backgroundColor: colorState.tertiaryColor.isAdded
                  ? colorState.tertiaryColor.scale[100]
                  : colorState.primaryColor.scale[100],
                color: colorState.tertiaryColor.isAdded
                  ? colorState.tertiaryColor.scale[800]
                  : colorState.primaryColor.scale[800],
              }}
            >
              View All Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual6;
