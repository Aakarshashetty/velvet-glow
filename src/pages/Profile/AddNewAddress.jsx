import { useState } from "react";


export const AddNewAddress = ({ address, setAddress,addAddress,setAddAddress }) => {
    
    const [newAddress, setNewAddress] = useState({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
    console.log(newAddress)
    // const randomData = {
    //   name:"testName",
    //   street:"1-3-44, VR Nagar",
    //   city: "Banglore",
    //   country:"India",
    //   zipCode: "500100",
    //   mobile: "123456789"
    // }
    const saveAddress = () => {
        setAddress([...address,newAddress])
        setAddAddress(!addAddress)
    }
    return (
      <div>
        <h2>Add New Address</h2>
        <input
          placeholder="Enter name"
          value  = {newAddress.name}
          onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
        />
        <input
          placeholder="Enter H:No, Colony"
          value  = {newAddress.street}
          onChange={(e) =>
            setNewAddress({ ...newAddress, street: e.target.value })
          }
        />
        <input
          placeholder="Enter city"
          value  = {newAddress.city}
          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
        />
        <input
          placeholder="Enter state"
          value  = {newAddress.state}
          onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
        />
        <input
          placeholder="Enter country"
          value  = {newAddress.country}
          onChange={(e) =>
            setNewAddress({ ...newAddress, country: e.target.value })
          }
        />
        <input
          placeholder="Enter Postal Code"
          value  = {newAddress.zipCode}
          onChange={(e) =>
            setNewAddress({ ...newAddress, zipCode: e.target.value })
          }
        />
        <input
          placeholder="Enter Mobile Number"
          value  = {newAddress.mobile}
          onChange={(e) =>
            setNewAddress({ ...newAddress, mobile: e.target.value })
          }
        />
        <button onClick={saveAddress}>Save</button>
        <button onClick={() => setAddAddress(!addAddress)}>Cancel</button>
        {/* <button onChange={}>Random Address</button> */}
      </div>
  
    );
  };
  