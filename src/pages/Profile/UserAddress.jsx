import React, { useState } from "react";
import { AddNewAddress } from "./AddNewAddress";
import EditAddress from "./EditAddress";
import { useAuth } from "../../contexts/auth-context";
import { v4 as uuid } from "uuid";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const UserAddress = () => {
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
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedAddress,setSelectedAddress] = useState(userAddress[0])

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
    setShowNewAddressForm(false);
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
    <div className="user-address">
      {userAddress?.map((address) => {
        const { id, name, street, city, state, country, zipCode, mobile } =
          address;
        return (
          <li key={name} className="user-address-list">
            <input type="radio" className="address-radio" name="address"  checked = {selectedAddress.id === id}onChange={() => setSelectedAddress(address)}/>
            <div className="user-address-details">
              <h4>{name}</h4>
              <p>
                {street}, {city}, {state}
              </p>
              <p>{zipCode}</p>
              <p>{country}</p>
              <p>Mobile Number: {mobile}</p>
              <div className="buttons">
                <button
                  onClick={() => editAddress(address)}
                  className="edit-button"
                >
                  <MdEdit />
                  Edit
                </button>
                <button
                  onClick={() => removeAddress(id)}
                  className="delete-button"
                >
                  <RiDeleteBin6Line />
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
      <button
        onClick={() => setShowNewAddressForm(true)}
        className="add-new-address-button"
      >
        Add New Address
      </button>
      {showNewAddressForm && (
        <AddNewAddress
          addNewAddress={addOrEditAddress}
          showNewAddressForm={showNewAddressForm}
          setShowNewAddressForm={setShowNewAddressForm}
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          formAddress={formAddress}
        />
      )}
      {showEditForm && (
        <EditAddress
          address={formAddress}
          saveAddress={addOrEditAddress}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
        />
      )}
    </div>
  );
};

export default UserAddress;
