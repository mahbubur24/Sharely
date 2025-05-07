import axios from "axios";
export default function getCurrentUser() {
  const data = async () => {
    return await axios.get("http://localhost:8000/api/v1/auth/getUser");
  };

  return data();
}
