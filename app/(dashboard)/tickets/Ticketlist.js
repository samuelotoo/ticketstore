import Link from "next/link";
import React from "react";


// this getTickets function is to get the data from the database
async function getTickets() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:2000/tickets`, {
    cache: "no-store",
  });

  return res.json();
}

// this Ticketlist function is to now display the data from the database
export default async function Ticketlist() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
