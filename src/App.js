import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Profile from "./components/Profile";


const App = () => {
  const [profileDetails, setProfileDetails] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("db/profile.json");
      setProfileDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Fragment>
      <Profile profileDetails={profileDetails} />
    </Fragment>
  );
}

export default App;
