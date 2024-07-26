import { NextResponse } from "next/server";

// 
export async function GET(_,{params}) {
    const id = params.id

  const res = await fetch(`http://localhost:2000/tickets/${id}`,{
    cache: 'no-store'
  });
  const ticket = await res.json();

  if (!res.ok){
    return NextResponse.json({Error:'Cannot find the ticket'},{
        status: 404
    })
  }

  return NextResponse.json(ticket, {
    status: 200,
  });
}