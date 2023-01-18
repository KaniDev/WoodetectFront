import React from "react";

interface AlertCardProps {
  alertName: string;
  alertText: string;
  severityColor: string;
}
const AlertCard = ({ alertName, alertText, severityColor }: AlertCardProps) => {
  return (
    <div className="relative rounded-lg">
      <div className="p-4 max-w-3xl">
        <div className="flex justify-between">
          <div className="text-lg font-medium">{alertName}</div>
          <div
            className={"rounded-full h-4 w-4 mt-1 bg-" + severityColor + "-500"}
          ></div>
        </div>
        <div className="bg-gray-200 rounded-lg max-w-3xl">
          <div className="p-2 text-gray-600">
            <p>{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
