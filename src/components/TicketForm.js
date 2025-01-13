import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, timestamp } from '../firebase';
import { formatDistanceToNow } from 'date-fns';

/**
 * Form to add a new ticket to Firestore
 */
function TicketForm() {
  const [issue, setIssue] = useState('');
  const [userName, setUserName] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tickets'), {
        issue,
        userName,
        timestamp: timestamp(),
        // We'll calculate 'formattedWaitTime' on retrieval, 
        // but you could also store an initial value here if you want.
      });
      setIssue('');
      setUserName('');
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Add a Ticket</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Issue: </label>
          <input 
            type="text" 
            value={issue} 
            onChange={(e) => setIssue(e.target.value)} 
          />
        </div>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;

