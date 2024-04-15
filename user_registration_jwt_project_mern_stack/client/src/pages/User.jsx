import React from "react";
import "./User.css"; // Import CSS file for styling

const User = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="p-3 rounded">
          <div className="pt-3 d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="text-decoration-underline">User Profile</h6>
            <div>
              <input
                type="search"
                placeholder="Search"
                className="rounded border border-none p-2"
              />
              <a href="#" className="ms-3 text-light text-decoration-none">
                Settings
              </a>
            </div>
          </div>
          <hr />

          <div className="row d-flex justify-content-between flex-wrap p-3">
            <div className="col-md-4 col-lg-3 shadow-sm p-3 text-center rounded-3 mb-3">
              <img
                src="#"
                alt="profile picture"
                width="100%"
                className="rounded border"
              />

              <div>
                <h4>Ecoders</h4>
                <p
                  style={{ display: "inline-block" }}
                  className="bg-success-subtle rounded-3 ps-5 pe-5"
                >
                  Student
                </p>{" "}
                <br />
                <button className="btn btn-sm rounded-5 text-light ps-2 pe-2">
                  Know More
                </button>
              </div>

              <div className="mt-3 mb-3 border rounded-4 text-start d-flex justify-content-around align-items-center">
                <div>
                  <p>Phone</p>
                  <h6>879797987987</h6>
                </div>

                <div>edit</div>
              </div>

              <div className="mt-3 mb-3 border rounded-4 text-start d-flex justify-content-around align-items-center">
                <div>
                  <p>Email</p>
                  <h6>ecoders@gmail.com</h6>
                </div>

                <div>edit</div>
              </div>

              <div className="mt-3 mb-3 border rounded-4 text-start d-flex justify-content-around align-items-center">
                <div>
                  <p>Company</p>
                  <h6>Ecoders Bangalore</h6>
                </div>

                <div>edit</div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9 ">
              <div className="d-flex justify-content-evenly flex-wrap">
                <div className="task-box-1 border border-secondary-subtle rounded-5 p-3 flex-wrap text-center mb-3">
                  <h1>5</h1>
                  <p>Assigned task</p>
                </div>

                <div className="task-box-2 border border-secondary-subtle rounded-5 p-3 flex-wrap text-center mb-3">
                  <h1>5</h1>
                  <p>Finished Task</p>
                </div>

                <div className="task-box-3 border border-secondary-subtle rounded-5 p-3 flex-wrap text-center mb-3">
                  <h1>5</h1>
                  <p>OnGoing Task</p>
                </div>

                <div className="task-box-4 border border-secondary-subtle rounded-5 p-3 flex-wrap text-center mb-3">
                  <h1>5</h1>
                  <p>Unfinished Task</p>
                </div>
              </div>

              <div className="p-3 shadow-sm m-3 rounded-3">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Contact
                    </button>
                    <button
                      className="nav-link"
                      id="nav-projects-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-projects"
                      type="button"
                      role="tab"
                      aria-controls="nav-projects"
                      aria-selected="false"
                    >
                      Projects
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex="0"
                  >
                    <p>
                      This is some placeholder content the Home tab's associated
                      content. Clicking another tab will toggle the visibility
                      of this one for the next. The tab JavaScript swaps classes
                      to control the content visibility and styling. You can use
                      it with tabs, pills, and any other .nav-powered
                      navigation.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                    tabIndex="0"
                  >
                    <p>
                      This is some placeholder content the Home tab's associated
                      content. Clicking another tab will toggle the visibility
                      of this one for the next. The tab JavaScript swaps classes
                      to control the content visibility and styling. You can use
                      it with tabs, pills, and any other .nav-powered
                      navigation.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-projects"
                    role="tabpanel"
                    aria-labelledby="nav-projects-tab"
                    tabIndex="0"
                  >
                    <p>
                      This is some placeholder content the Home tab's associated
                      content. Clicking another tab will toggle the visibility
                      of this one for the next. The tab JavaScript swaps classes
                      to control the content visibility and styling. You can use
                      it with tabs, pills, and any other .nav-powered
                      navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
