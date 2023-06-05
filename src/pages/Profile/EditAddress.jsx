import React, { useState } from "react";

const EditAddress = ({ address, saveAddress }) => {
  const [updatedAddress, setUpdatedAddress] = useState(address);

  return (
    <div>
      <h2>Edit Address</h2>
      <input
        placeholder="Enter name"
        defaultValue={address.name}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, name: e.target.value })
        }
      />
      <input
        placeholder="Enter H:No, Colony"
        defaultValue={address.street}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, street: e.target.value })
        }
      />
      <input
        placeholder="Enter city"
        defaultValue={address.city}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, city: e.target.value })
        }
      />
      <input
        placeholder="Enter state"
        defaultValue={address.state}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, state: e.target.value })
        }
      />
      <input
        placeholder="Enter country"
        defaultValue={address.country}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, country: e.target.value })
        }
      />
      <input
        placeholder="Enter Postal Code"
        defaultValue={address.zipCode}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, zipCode: e.target.value })
        }
      />
      <input
        placeholder="Enter Mobile Number"
        defaultValue={address.mobile}
        onChange={(e) =>
          setUpdatedAddress({ ...updatedAddress, mobile: e.target.value })
        }
      />
      <button onClick={() => saveAddress(updatedAddress)}>update</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditAddress;
