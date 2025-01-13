import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { formatDistanceToNow } from 'date-fns';

/**
 * Displays details about a single ticket and allows deletion.
 */
function TicketDetail({ ticket, onClose }) {
  const handleDelete = async () => {
    const docRef = doc(db, 'tickets', ticket.id);
    try {
      await deleteDoc(docRef);
      onClose();
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  // Using date-fns to format wait time based on timestamp from Firestore
  let displayWaitTime = '';
  if (ticket.timestamp?.toDate) {
    displayWaitTime = formatDistanceToNow(ticket.timestamp.toDate(), { addSuffix: true });
  } else {
    displayWaitTime = 'Unknown time';
  }

  return (
    <div style={{ border: '1px solid #444', padding: '10px', marginTop: '10px' }}>
      <h3>Ticket Detail</h3>
      <p><strong>Issue:</strong> {ticket.issue}</p>
      <p><strong>User:</strong> {ticket.userName}</p>
      <p><strong>Created:</strong> {displayWaitTime}</p>
      <button onClick={handleDelete}>Delete Ticket</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>Close</button>
    </div>
  );
}

export default TicketDetail;
