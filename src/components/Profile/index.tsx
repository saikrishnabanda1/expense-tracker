import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user: any) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (data) {
        setUserDetails(data);
        return data;
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome to Expense Tracker </h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.userName}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;
