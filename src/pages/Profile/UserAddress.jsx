import React, { useState } from "react";
import { AddNewAddress } from "./AddNewAddress";
import EditAddress from "./EditAddress";
import { useAuth } from "../../contexts/auth-context";
import { v4 as uuid } from "uuid";

const UserAddress = () => {
  //   const [addressForm,setAddressForm] = useState(newAddress)
  //   const [address, setAddress] = useState([dummyAddress]);
  const [newAddress, setNewAddress] = useState({
    id: uuid(),
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });
  const [formAddress, setFormAddress] = useState(newAddress);

  const { userAddress, setUserAddress } = useAuth();

  const [addAddress, setAddAddress] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const addOrEditAddress = (address) => {
    const matchingAddress = userAddress.find(
      (userAdd) => userAdd.id === address.id
    );
    if (matchingAddress) {
      matchingAddress.name = address.name;
      matchingAddress.street = address.street;
      matchingAddress.city = address.city;
      matchingAddress.state = address.state;
      matchingAddress.country = address.country;
      matchingAddress.zipCode = address.zipCode;
      matchingAddress.mobile = address.mobile;
      setUserAddress(
        userAddress
          .filter((address) => address.id !== matchingAddress.id)
          .concat(matchingAddress)
      );
    } else {
      setUserAddress([...userAddress, address]);
    }
    setAddAddress(false);
    setShowEditForm(false);
  };

  const editAddress = (editAddress) => {
    setFormAddress(editAddress);
    setShowEditForm(!showEditForm);
  };

  const removeAddress = (addressId) => {
    const updatedAddress = userAddress.filter(({ id }) => id !== addressId);
    setUserAddress(updatedAddress);
  };
  return (
    <div>
      <h3>My Addressess</h3>
      {userAddress?.map((address) => {
        const { id, name, street, city, state, country, zipCode, mobile } =
          address;
        return (
          <li key={name}>
            <div>
              <h4>{name}</h4>
              <p>
                {street}, {city}, {state}
              </p>
              <p>{zipCode}</p>
              <p>{country}</p>
              <p>Mobile Number: {mobile}</p>
              <button onClick={() => editAddress(address)}>Edit</button>
              <button onClick={() => removeAddress(id)}>Remove</button>
            </div>
          </li>
        );
      })}
      <button onClick={() => setAddAddress(true)}>Add New Address</button>
      {addAddress && (
        <AddNewAddress
          addNewAddress={addOrEditAddress}
          addAddress={addAddress}
          setAddAddress={setAddAddress}
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          formAddress={formAddress}
        />
      )}
      {showEditForm && (
        <EditAddress address={formAddress} saveAddress={addOrEditAddress} />
      )}
    </div>
  );
};

export default UserAddress;
