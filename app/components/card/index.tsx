import { TicketType } from "@/app/types";
import React from "react";
import PriorityBlock from "./priorityblock";
import DeleteBlock from "./deleteblock";
import ProgressBlock from "./progressblock";
import StatusBlock from "./statusblock";
import Link from "next/link";

type Props = {
  ticket: TicketType;
};

const Card = ({ ticket }: Props) => {
  return (
    <div className="bg-gray-700 hover:bg-card-hover rounded-md shadow-lg p-3 mt-2 mb-4 flex flex-col">
      <div className="flex mb-3">
        <PriorityBlock priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <Link href={`/form/${ticket._id}`}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2 " />
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>

        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-sm my-1">{ticket.createdAt}</p>
            <ProgressBlock progress={ticket.progress} />
          </div>
          <div className="flex items-end ml-auto">
            <StatusBlock status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
