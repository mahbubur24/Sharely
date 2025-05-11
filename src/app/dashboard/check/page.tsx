import axios from "axios";
import { redirect } from "next/navigation";

export default async function Page() {
  let user = null;
  try {
    const res = await axios.get("https://sharely-backend.onrender.com/api/v1/auth/getUser");

    const data = res.data;
    if (!data.success) {
      redirect("/login");
    }

    user = data.data;
  } catch (err) {
    console.log({ err });

    redirect("/login");
  }

  return <h2>{`${user}`}</h2>;
}
