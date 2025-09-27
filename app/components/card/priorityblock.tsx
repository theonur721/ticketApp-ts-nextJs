import React from "react";
import { FaFire } from "react-icons/fa";

type Props = {
  priority: number;
};

const PriorityBlock = ({ priority }: Props) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaFire
        className="pr-1"
        style={{ color: priority > 0 ? "red" : "gray" }}
      />
      <FaFire
        className="pr-1"
        style={{ color: priority > 1 ? "red" : "gray" }}
      />
      <FaFire
        className="pr-1"
        style={{ color: priority > 2 ? "red" : "gray" }}
      />
      <FaFire
        className="pr-1"
        style={{ color: priority > 3 ? "red" : "gray" }}
      />
      <FaFire
        className="pr-1"
        style={{ color: priority > 4 ? "red" : "gray" }}
      />
    </div>
  );
};

export default PriorityBlock;
