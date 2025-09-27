import React from "react";

type Props = {
  status: string;
};

const StatusBlock = ({ status }: Props) => {
  const getColor = () => {
    switch (status.toLocaleLowerCase()) {
      case "başladı":
        return "purple";
      case "başlamadı":
        return "orange";
      case "bitti":
        return "green";
      default:
        return "gray";
    }
  };
  return (
    <span
      style={{ background: getColor() }}
      className="inline-block rounded-full bg-green-700 py-1 px-3 font-semibold text-xs"
    >
      {status}
    </span>
  );
};

export default StatusBlock;
