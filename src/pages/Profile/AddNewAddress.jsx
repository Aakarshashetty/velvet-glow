import { ImCancelCircle } from "react-icons/im";
export const AddNewAddress = ({
  addNewAddress,
  addAddress,
  setAddAddress,
  newAddress,
  setNewAddress,
}) => {
  const saveAddress = () => {
    addNewAddress(newAddress);
    setAddAddress(!addAddress);
  };
  return (
    <div className="new-address-form">
      <button
        onClick={() => setAddAddress(!addAddress)}
        className="cancel-button"
      >
        <ImCancelCircle />
      </button>
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

      <button onClick={saveAddress} className="save-button">
        Add Address
      </button>
    </div>
  );
};
