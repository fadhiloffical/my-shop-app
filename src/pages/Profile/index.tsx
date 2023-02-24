import { useState } from "react";
import TermsDialog from "../../Component/TermsDialog";
import "./index.css";

const ProfilePage = () => {
  const [showTermsDialog, setShowTermsDialog] = useState<boolean>(localStorage.getItem("profileTermsAccepted") !== "true");

  const handleCancelTerms = () => {
    setShowTermsDialog(false);
  }

  const handleAcceptTerms = () => {
    setShowTermsDialog(false);
    localStorage.setItem("profileTermsAccepted", "true");
  }

 
  
  return (
    <div className="profile-container">
      <img className="profile-image" src='https://dummyimage.com/300x300/000/fff&text=Profile' alt="User Profile" />
      <h1 className="profile-username">Fadhil Asharaf</h1>
      <p className="profile-email">fadhilasharaf@gmail.com</p>
      <button onClick={()=>setShowTermsDialog(true)}>See T & C</button>
      {showTermsDialog && (
        <TermsDialog onCancel={handleCancelTerms} onAccept={handleAcceptTerms} />
      )}
    </div>
  );
};

export default ProfilePage;
