import React from 'react'
import Ticketlist from './Ticketlist'

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open</small></p>
          </div>
        </nav>
        <Ticketlist/>
    </main>
  )
}
