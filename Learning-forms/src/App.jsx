import "./App.css";
import Forms from "./components/Forms/Forms";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import ReusableComponents from "./components/ReusableComponents/ReusableComponents";

function App() {
  const handleSignUp = (form) => {
    console.log("sign up data", form);
  };

  const handleProfileUpdate = (form) => {
    console.log("profile data", form);
  };

  return (
    <>
      {/* <Forms /> */}
      {/* <ReusableForm></ReusableForm> */}
      <ReusableComponents handleSubmit={handleSignUp}>
        <div>
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
          <p className="mb-2">Please sign up</p>
        </div>
      </ReusableComponents>
      <ReusableComponents
        SubmitBtn={"Update Profile"}
        handleSubmit={handleProfileUpdate}
      >
        <div>
          <h2 className="text-2xl font-bold">Update Profile</h2>
          <p className="mb-2">Always keep your profile updated</p>
        </div>
      </ReusableComponents>
    </>
  );
}

export default App;
