"use client";

import { useUser } from "@/lib/context/user-context";

export default function DashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = null;

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // async function checkUser() {
  //   try {
  //     const res = await axios.get("http://localhost:8000/api/v1/auth/getUser", {
  //       withCredentials: true,
  //     });
  //     const data = res.data;
  //     if (!data.success) {
  //       redirect("/login");
  //     }
  //     console.log(res.data);

  //     user = data.data;
  //     // console.log({ user });
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       const data = err.response?.data;
  //       console.log("Auth check failed:", data);

  //       if (data && data.success === false) {
  //         redirect("/login");
  //       }
  //     }
  //   }
  //   setIsLoading(false);
  // }

  const { loading: isLoading } = useUser();
  return <div>{isLoading ? <h2>Loading</h2> : <div>{children}</div>}</div>;
}
