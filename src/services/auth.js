import axios from "axios";

export const authenticate = async credentitals => {
  try {
    const response = await axios.post(
      "http://localhost:3333/auth/authenticate",
      {
        login: credentitals.user,
        password: credentitals.password
      }
    );
    if (response.status === 200) {
      localStorage.setItem("onlytransmission:token", response.data.token);
      return true;
    }
  } catch (error) {
    return false;
  }
};
