# My Tickets with Firestore

## Overview
This is a React application demonstrating My Tickets, powered by Firebase (Firestore for data, Authentication for user sign-in). It uses the following technologies:

- **React (Hooks & Functional Components)**
- **React Router** for client-side routing.
- **Firebase** (Firestore, Auth) for data storage and authentication.
- **date-fns** for formatting timestamps and calculating wait times.
- **Real-time Updates** via Firestore `onSnapshot`.

## Features
1. **Authentication**: Only signed-in users can view, add, or delete tickets.
2. **Tickets**: Create, read, and delete tickets stored in Firestore.
3. **Real-time**: Firestore automatically updates the UI when data changes.
4. **Wait Times**: Uses `date-fns` to display how long ago a ticket was posted.
5. **Protected Routes**: React Router restricts ticket management to signed-in users.


## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/he-the-ro/firestore-wk3.git

2. Navigate to the project repository
    cd firestore-wk3

3. Create a .env

4. Install Dependancies
    npm install
    
5. Start development server
    npm start

