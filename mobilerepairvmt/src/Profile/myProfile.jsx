import React from "react";


const ProfileView = (props) => {      
      const filterServices = props.user.filter(
        (user) =>
          user.firstName ||
          user.lastName ||
          user.address||
          user.email ||
          user.phoneNumber ||
          user.shoppingCart ||
          user.reviews
          
      );
    return (
      <React.Fragment>
        {props.isLoggedIn ? (
          <h1>bloop</h1>
        ) : (
          <table responsive className="table table-striped">
            <thead>
              <tr></tr>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Shopping Cart</th>
                <th>Reviews</th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              {filterServices.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td>${user.phoneNumer}</td>
                    <td>${user.shoppingCart}</td>
                    <td>${user.reviews}</td>
                    {/* <td>${user.customerLti}</td> */}

                    <td>
                      {/* <button onClick={() => props.addToCart(user)}>
                        Add to Cart
                      </button> */}
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
}
 
export default ProfileView;