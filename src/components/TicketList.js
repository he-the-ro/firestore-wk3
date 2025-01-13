
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import TicketForm from './TicketForm';
import TicketDetail from './TicketDetail';

function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    // Real-time listener for all tickets, ordered by timestamp
    const q = query(collection(db, 'tickets'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ticketData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setTickets(ticketData);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Ticket List</h2>
      <TicketForm />
      {tickets.map((ticket) => (
        <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
          <p><strong>{ticket.issue}</strong></p>
          <p>Time since posted: {ticket.formattedWaitTime} ago</p>
          <button onClick={() => handleSelectTicket(ticket)}>Details</button>
        </div>
      ))}
      {selectedTicket && <TicketDetail ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />}
    </div>
  );
}

export default TicketList;