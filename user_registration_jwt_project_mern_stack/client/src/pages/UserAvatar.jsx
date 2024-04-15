import React from 'react';

const UserAvatar = () => {
  // Retrieve user information from local storage or context
  const username = localStorage.getItem('username'); // Assuming username is stored in local storage

  return (
    <div className="user-avatar">
      {/* Display user avatar */}
      <img src="avatar.jpg" alt="User Avatar" className="avatar" />

      {/* Display username */}
      <span className="username">{username}</span>
    </div>
  );
}

export default UserAvatar;