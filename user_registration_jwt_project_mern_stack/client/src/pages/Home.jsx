import React from 'react';
import UserAvatar from './UserAvatar'; // Import the UserAvatar component

const Home = () => {
  // Retrieve username from local storage
  const username = localStorage.getItem('username');

  return (
    <div>
      {/* Render the UserAvatar component and pass the username as a prop */}
      <UserAvatar username={username} />
      {/* Display additional content */}
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default Home;
