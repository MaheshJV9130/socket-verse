import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";

const jwtToUserData = () => {
  const token = Cookies.get("sessionId");
  if (!token) return null;

  try {
    return jwtDecode(token); // returns { username, email, profilePic }
  } catch (error) {
    console.error("Invalid token:", error);
    Cookies.remove("sessionId");
    window.location.href = "/auth"; // server redirect nahi to window ka use
    return null;
  }
};

export default jwtToUserData;