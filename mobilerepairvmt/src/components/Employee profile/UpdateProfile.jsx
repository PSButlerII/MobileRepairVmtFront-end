
// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import useForm from "../UseForm/useForm";

// const UpdateProfile = (props) => {
//   const { values, handleChange, handleSubmit } = useForm(create);
//   const [willRedirect, setWillRedirect] = useState(false);
//   const [ownerStatus, setOwnerStatus] = useState(false);

//   function handleCheckbox() {
//     setOwnerStatus(!ownerStatus);
//     console.log(handleCheckbox);
//   }

//   function create() {
//     props.newUser(values);
//     console.log(values);
//     setWillRedirect(true);
//     setOwnerStatus(true);
//   }
//   if (willRedirect === false) {
//     return (
//       <div>
//         <div>
//           <div className="row row-spacer">
//             <h1>Mobile Repair VMT</h1>
//           </div>

//           <form className="col-md-2" onSubmit={handleSubmit}>
//             <h1 className="h3 mb-3 fw-normal"></h1>

//             <div className="form-floating">
//               <input
//                 name="FirstName"
//                 type="string"
//                 className="form-control"
//                 placeholder="John"
//                 required
//                 onChange={handleChange}
//                 values={values.FirstName}
//               />
//               {console.log(values.FirstName)}
//               <label for="floatingInput">First Name </label>
//             </div>
//             <div className="form-floating">
//               <input
//                 name="LastName"
//                 type="string"
//                 className="form-control"
//                 placeholder="Doe"
//                 onChange={handleChange}
//                 values={values.LastName}
//               />
//               {console.log(values.LastName)}
//               <label for="floatingPassword">Last Name</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 name="UserName"
//                 type="string"
//                 className="form-control"
//                 placeholder="John123"
//                 onChange={handleChange}
//                 values={values.UserName}
//               />
//               {console.log(values.UserName)}
//               <label for="floatingInput">User Name</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 name="Password"
//                 type="Password"
//                 className="form-control"
//                 placeholder="112234344rrttyyuu"
//                 onChange={handleChange}
//                 values={values.Password}
//               />
//               {console.log(values.Password)}
//               <label for="floatingInput">Password</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 name="Email"
//                 type="string"
//                 className="form-control"
//                 placeholder="name@example.com"
//                 onChange={handleChange}
//                 values={values.Email}
//               />
//               {console.log(values.Email)}
//               <label for="floatingInput">Email address</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 name="PhoneNumber"
//                 type="string"
//                 className="form-control"
//                 placeholder="555-555-5555"
//                 onChange={handleChange}
//                 values={values.PhoneNumber}
//               />
//               {console.log(values.PhoneNumber)}
//               <label for="floatingInput">Phone Number</label>
//             </div>

//             <div className="form-floating">
//               <input
//                 name="Address"
//                 type="String"
//                 className="form-control"
//                 placeholder="32 marshal Rd., Rochester,NY 33333"
//                 onChange={handleChange}
//                 values={values.Address}
//               />
//               {console.log(values.Address)}
//               <label for="floatingInput">Address</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 Id="flexCheckChecked"
//                 type="checkbox"
//                 className="form-check-input"
//                 onChange={handleCheckbox}
//               />

//               <label for="floatingInput">Register As Owner?</label>
//             </div>
//             <br></br>
//             <div>
//               <button className="w-10 btn btn-lg btn-primary" type="submit">
//                 Update
//               </button>
//             </div>

//             <p className="mt-5 mb-3 text-muted">© 2021</p>
//           </form>
//         </div>
//       </div>
//     );
//   } else {
//     return <Redirect to="/Profile" />;
//   }
// };

// export default UpdateProfile;