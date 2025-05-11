import { LoginForm } from "@/components/auth/login-form";
import { UserProvider } from "@/lib/context/user-context";

export default function page() {
  return (
    <UserProvider>
      <LoginForm />
    </UserProvider>
  );
}
