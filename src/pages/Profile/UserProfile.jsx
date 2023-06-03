// import React, { useState } from 'react'
// import { useAuth } from '../../contexts/auth-context'
// import { useNavigate } from 'react-router';
// import './profile.css'

// const UserProfile = () => {
//   const { isLoggedIn, setIsLoggedIn,userData } = useAuth();
//   const navigate = useNavigate();
//   const {firstName,lastName} = userData
//   const [check,setChecked] = useState(true);
//   const form = {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//     mobile: "",
//   };
//   const [formDisplay, setFormDisplay] = useState(false);
//   const [addressForm, setAddForm] = useState(form);
//   const logOutHandler = () => {
//     setIsLoggedIn(!isLoggedIn);
//     navigate("/logout");
//     localStorage.removeItem("encodedToken")
//     localStorage.removeItem("user")
//   };
//   const editAddress = (_id, name, street, city, state, country, zipCode, mobile) => {
//     setFormDisplay(true);
//     setAddForm((form) => ({
//       ...form,
//       _id,
//       name,
//       street,
//       city,
//       state,
//       country,
//       zipCode,
//       mobile,
//     }));
//   };
//   return (
//     <div className="profile-container">
//       <div className="profile-main-container">
//         <h2>Account</h2>

//         <div className="profile-main">
//           <div className="tabs">
//             <input
//               type="radio"
//               className="tabs"
//               id="profile"
//               checked={check}
//               onChange={() => setChecked(true)}
//             />
//             <label htmlFor="profile">Profile</label>
//             <div className="tab">
//               <div className="profile-details">
//                 <h3 className="details-header">Profile Details</h3>

//                 <div className="profile-details-main">
//                   <div className="title">
//                     <p className="paragraph-md">Full Name</p>
//                     <p className="paragraph-md">Email</p>
//                   </div>
//                   <div>
//                     <p className="paragraph-md">{`${firstName} ${lastName}`}</p>
//                     <p className="paragraph-md"> {email}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="">
//                 <h3 className="details-header">Account Settings</h3>
//                 <button className="btn danger setting-logout" onClick={() => logOutHandler()}>
//                   Log Out
//                 </button>
//               </div>
//             </div>

//             <input
//               type="radio"
//               className="tabs"
//               id="address"
//               checked={!check}
//               onChange={() => setChecked(!check)}
//             />
//             <label htmlFor="address">Address</label>
//             <div className="tab">
//               <h3 className="details-header">My Addresses</h3>

//               {address &&
//                 address.map(({ _id, name, street, city, state, country, zipCode, mobile }) => (
//                   <div key={_id} className="address-container">
//                     <p className="paragraph-md">{name}</p>
//                     <div>
//                       <p className="paragraph-sm">
//                         {street}, {city},{state}. {zipCode}
//                       </p>
//                       <p className="paragraph-sm">{country}.</p>
//                       <p className="paragraph-sm">Phone Number : {mobile}</p>
//                     </div>
//                     <div className="address-btn">
//                       <button
//                         className="btn outlined-default address-edit"
//                         onClick={() =>
//                           editAddress(_id, name, street, city, state, country, zipCode, mobile)
//                         }
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn outlined-danger address-remove"
//                         onClick={() =>
//                           removeFromAddress(dataDispatch, _id, token, toast, setFormDisplay)
//                         }
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}

//               <button
//                 onClick={() => {
//                   setFormDisplay(true);
//                   setAddForm(formValue);
//                 }}
//               >
//                 + Add New Address
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <AddressForm
//         addressForm={addressForm}
//         setAddForm={setAddForm}
//         formDisplay={formDisplay}
//         setFormDisplay={setFormDisplay}
//         form={form}
//       /> */}
//     </div>
//   )
// }

// export default UserProfile