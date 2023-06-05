import React, { useState } from "react";
import UserProfile from "./UserProfile";
import UserAddress from "./UserAddress";
import "./profile.css";

const UserDetails = () => {
  const userData = ["My Profile", "My Orders", "My Addressess"];
  const [clickedData, setClickedData] = useState("My Profile");
  return (
    <div className="user-details">
      <div className="user-details-aside">
        {userData.map((data) => (
          <p
            key={data}
            onClick={() => setClickedData(data)}
            style={{ fontWeight: clickedData === data && "bold", borderBottom: clickedData === data && "3px solid #A0522D"}}
          >
            {data}
          </p>
        ))}
      </div>
      <div className="user-details-details">
        {clickedData === "My Profile" && <UserProfile />}
        {clickedData === "My Orders" && <p>No Orders yet!</p>}
        {clickedData === "My Addressess" && <UserAddress />}
      </div>
    </div>
  );
};

export default UserDetails;
