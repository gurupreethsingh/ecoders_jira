import React from "react";
import { Link } from 'react-router-dom';
import "./User.css"; // Import CSS file for styling

// Sample user data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Street, City",
    designation: "Software Engineer",
    profileImage: "profile1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Road, Town",
    designation: "Web Developer",
    profileImage: "profile2.jpg"
  },

  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Road, Town",
    designation: "Web Developer",
    profileImage: "profile2.jpg"
  },

  {
    id: 4,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Road, Town",
    designation: "Web Developer",
    profileImage: "profile2.jpg"
  },

  {
    id: 5,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Road, Town",
    designation: "Web Developer",
    profileImage: "profile2.jpg"
  },

  {
    id: 6,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Road, Town",
    designation: "Web Developer",
    profileImage: "profile2.jpg"
  },
  // Add more user data as needed
];

const Users = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="pt-3 d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="text-decoration-underline">All User List</h6>
            <div>
              <input
                type="search"
                placeholder="Search"
                className="rounded border-none p-2"
              />
              <Link to="#" className="ms-3 p-2 rounded text-decoration-none" style={{backgroundColor : "purple", color : "white"}}>
                Submit
              </Link>
            </div>
          </div>
          <hr />

          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4  row-cols-sm-2 border-none p-5">
            {users.map((user) => (
              <div key={user.id} className="col mb-4">
                <Link to={`/user/${user.id}`} className="text-decoration-none">
                  <div className="card">
                    <img
                      src={user.profileImage}
                      className="card-img-top"
                      alt={user.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">{user.email}</p>
                      <p className="card-text">{user.phone}</p>
                      <p className="card-text">{user.address}</p>
                      <p className="card-text">{user.designation}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
