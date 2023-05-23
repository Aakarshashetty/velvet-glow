import React, { useState } from "react";
import { AddNewAddress } from "./AddNewAddress";

const UserAddress = () => {
  const dummyAddress = {
    name: "Aakarsha shetty",
    street: "2-1-44/2, VS Nagar",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    zipCode: "550103",
    mobile: "123097997",
  };
  
  const [address, setAddress] = useState([dummyAddress]);
  console.log(address)
  const [addAddress,setAddAddress] = useState(false)
  return (
    <div>
      <h3>My Addressess</h3>
      {address?.map(
        ({ name, street, city, state, country, zipCode, mobile }) => (
          <li key={name}>
            <div>
              <h4>{name}</h4>
              <p>
                {street}, {city}, {state}
              </p>
              <p>{zipCode}</p>
              <p>{country}</p>
              <p>Mobile Number: {mobile}</p>
              <button onClick={()=>setAddAddress(true)}>Edit</button>
              <button>Remove</button>
            </div>
          </li>
        )
      )}
      <button onClick={()=>setAddAddress(!addAddress)}>Add New Address</button>
      {addAddress && <AddNewAddress address={address} setAddress={setAddress} addAddress = {addAddress} setAddAddress = {setAddAddress}/>}
    </div>
  );
};

export default UserAddress;

