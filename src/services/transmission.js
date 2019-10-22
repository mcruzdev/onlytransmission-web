import axios from "axios";

export const getAll = async () => {
  const transmissions = await axios.get("http://localhost:3333/transmissions");
  return transmissions;
};
