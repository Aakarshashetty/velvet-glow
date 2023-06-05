export const AddNewAddress = ({
  addNewAddress,
  addAddress,
  setAddAddress,
  newAddress,
  setNewAddress,
  formAddress,
}) => {
  const saveAddress = () => {
    addNewAddress(newAddress);
    setAddAddress(!addAddress);
  };
  return (
    <div>
      <h2>Add New Address</h2>
      <input
        placeholder="Enter name"
        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
      />
      <input
        placeholder="Enter H:No, Colony"
        onChange={(e) =>
          setNewAddress({ ...newAddress, street: e.target.value })
        }
      />
      <input
        placeholder="Enter city"
        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
      />
      <input
        placeholder="Enter state"
        onChange={(e) =>
          setNewAddress({ ...newAddress, state: e.target.value })
        }
      />
      <input
        placeholder="Enter country"
        onChange={(e) =>
          setNewAddress({ ...newAddress, country: e.target.value })
        }
      />
      <input
        placeholder="Enter Postal Code"
        onChange={(e) =>
          setNewAddress({ ...newAddress, zipCode: e.target.value })
        }
      />
      <input
        placeholder="Enter Mobile Number"
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
