import React from "react";

interface SensorCardProps {
  sensorName: string;
  status: string;
  lastActive: string;
}

const SensorCard = ({ sensorName, status, lastActive }: SensorCardProps) => {
  const statusDotColor = status === "active" ? "bg-green-500" : "bg-red-500";
  return (
    <div className="relative rounded-lg">
      <div className="p-4 max-w-xl">
        <div className="flex justify-between">
          <div className="text-lg font-medium">{sensorName}</div>
          <div className={"rounded-full h-4 w-4 mt-1 " + statusDotColor}></div>
        </div>
        <div className="bg-gray-200 rounded-lg w-32">
          <div className="p-2 text-gray-600">
            <p>
              Last signal:
              <br /> {status === "active" ? "Now" : lastActive}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
