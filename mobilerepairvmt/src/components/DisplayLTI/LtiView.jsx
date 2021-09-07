import React from "react";

const ProfileView = (props) => {
  const filterServices = props.users.filter(
    (users) =>
      users.firstName ||
      users.lastName ||
      users.address ||
      users.email ||
      users.phoneNumber
  );
  return (
    <React.Fragment>
      {props.isLoggedIn ? (
        <h1>bloop</h1>
      ) : (
        <table responsive className="table table-striped ">
          <thead>
            <tr></tr>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {filterServices.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};
