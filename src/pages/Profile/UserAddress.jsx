// import React, { useState } from "react";
// import { AddNewAddress } from "./AddNewAddress";
// import { v4 as uuid } from "uuid";
// import EditAddress from "./EditAddress";
// import { useAddress } from "../../contexts/address-context";

//  const UserAddress = () => {
// //   const dummyAddress = {
// //     name: "Aakarsha shetty",
// //     street: "2-1-44/2, VS Nagar",
// //     city: "Hyderabad",
// //     state: "Telangana",
// //     country: "India",
// //     zipCode: "550103",
// //     mobile: "123097997",
// //   };
// //   const [newAddress, setNewAddress] = useState({
// //     id:uuid(),
// //     name: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     country: "",
// //     zipCode: "",
// //     mobile: "",
// //   });
// //   const [addressForm,setAddressForm] = useState(newAddress)
// //   const [address, setAddress] = useState([dummyAddress]);
// const {address,addNewAddress} = useAddress();
//    const [addAddress,setAddAddress] = useState(false)
//   const editAddress = (id) => {
//     address.map(indiAddress => {
//       if(indiAddress.id === id){
//          const updatedAddress =  <EditAddress address={indiAddress} setAddAddress = {setAddAddress} addAddress = {addAddress}/>
//          console.log(updatedAddress)
//       }
//     }

//     )
//     // setAddressForm(address)
    
//     }
//   const removeAddress = (addressId) => {
//     const updatedAddress = address.filter(id=> id!== addressId);
//     // setAddress(updatedAddress)
//   }
//   return (
//     <div>
//       <h3>My Addressess</h3>
//       {address?.map(
//         ({ id,name, street, city, state, country, zipCode, mobile }) => (
//           <li key={name}>
//             <div>
//               <h4>{name}</h4>
//               <p>
//                 {street}, {city}, {state}
//               </p>
//               <p>{zipCode}</p>
//               <p>{country}</p>
//               <p>Mobile Number: {mobile}</p>
//               <button onClick={()=>editAddress(id)}>Edit</button>
//               <button onClick={()=>removeAddress(id)}>Remove</button>
//             </div>
//           </li>
//         )
//       )}
//       <button onClick={()=>setAddAddress(true)}>Add New Address</button>
//       {addAddress && <AddNewAddress addNewAddress = {addNewAddress} addAddress={addAddress} setAddAddress = {setAddAddress}/>}
//     </div>
//   );
// };

// export default UserAddress;



  