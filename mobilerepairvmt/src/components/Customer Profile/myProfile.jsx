import React, { useState } from "react";
import useForm from "../UseForm/useForm";

const ProfileView = (props) => {
  // const { values, handleChange, handleSubmit } = useForm(create);
  // const {users} = useState();
  const filterServices = props.users.filter(
    (users) =>
      users.firstName ||
      users.lastName ||
      users.address ||
      users.email ||
      users.phoneNumber||
      users.isOwner
  );
  // function create() {
  //   props.newUser(values);
  //   console.log(values);
    
  // }
  // function getInfo(){
  //   props.userInfo();
  // }





  return (
    <React.Fragment>
      {console.log(props.users.isOwner)}
      {console.log(props.users.IsOwner)}
      {console.log(props.ownerStatus)}
      {props.isLoggedIn ? (
        <h1>bloop</h1>
      ) : (
        <table responsive className="table table-striped ">
          <thead>
            <tr></tr>
            <tr>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Is Owner?</th>
              {/* <th>Vehicles in Maintenance</th> */}
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {filterServices.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.userName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.isOwner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* <h1>hello</h1>
      <div></div>
      <div>
        <div>
          <div className="row row-spacer">
            <h1>Update Profile</h1>
          </div>

          <form className="col-md-2" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal"></h1>

            <div className="form-floating">
              <input
                name="FirstName"
                type="string"
                className="form-control"
                placeholder={users.email}
                
                onChange={handleChange}
                values={values.FirstName}
              />
              {console.log(values.FirstName)}
              <label for="floatingInput">First Name </label>
            </div>
            <div className="form-floating">
              <input
                name="LastName"
                type="string"
                className="form-control"
                placeholder="Doe"
                onChange={handleChange}
                values={values.LastName}
              />
              {console.log(values.LastName)}
              <label for="floatingPassword">Last Name</label>
            </div>
            <div className="form-floating">
              <input
                name="UserName"
                type="string"
                className="form-control"
                placeholder="John123"
                onChange={handleChange}
                values={values.UserName}
              />
              {console.log(values.UserName)}
              <label for="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                name="Password"
                type="Password"
                className="form-control"
                placeholder="112234344rrttyyuu"
                onChange={handleChange}
                values={values.Password}
              />
              {console.log(values.Password)}
              <label for="floatingInput">Password</label>
            </div>
            <div className="form-floating">
              <input
                name="Email"
                type="string"
                className="form-control"
                placeholder="name@example.com"
                onChange={handleChange}
                values={values.Email}
              />
              {console.log(values.Email)}
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="PhoneNumber"
                type="tel"
                className="form-control"
                placeholder="555-555-5555"
                onChange={handleChange}
                values={values.PhoneNumber}
              />
              {console.log(values.PhoneNumber)}
              <label for="floatingInput">Phone Number</label>
            </div>

            <div className="form-floating">
              <input
                name="Address"
                type="String"
                className="form-control"
                placeholder="32 marshal Rd., Rochester,NY 33333"
                onChange={handleChange}
                values={values.Address}
              />
              {console.log(values.Address)}
              <label for="floatingInput">Address</label>
            </div>
         
            <br></br>
            <div>
              <button className="w-10 btn btn-lg btn-primary" type="submit">
                UPDATE
              </button>
            </div>

            <p className="mt-5 mb-3 text-muted">© 2021</p>
          </form>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default ProfileView;
