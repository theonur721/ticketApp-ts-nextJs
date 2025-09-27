import React from "react";
import { TicketType } from "../types";
import Card from "../components/card";

type ResType = {
  tickets: TicketType[];
};

const getTickets = async (): Promise<ResType> => {
  const res = await fetch("http://localhost:3000/api/tickets", {
    cache: "no-store",
  });

  return res.json();
};

const Home = async () => {
  const { data } = await getTickets();

  const categories = [...new Set(data?.map(({ category }) => category))];

  return (
    <div className="px-10">
      {categories.map((category, key) => (
        <div key={key} className="mt-4">
          <h2 className="mb-2">{category}</h2>

          <div className="lg-grid grid-cols-2 xl:grid-cols-4">
            {data
              .filter((ticket) => ticket.category === category)
              .map((ticket, key) => (
                <Card key={key} ticket={ticket} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
