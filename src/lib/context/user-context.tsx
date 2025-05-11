// context/UserContext.tsx
"use client";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type UserContextType = {
  user: User | null;
  loading: boolean;
  setUser: (data: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  console.log({ user });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user) {
          const res = await axios.get(
            "https://sharely-backend.onrender.com/api/v1/auth/getUser",
            {
              withCredentials: true,
            }
          );

          if (!res.data.success) {
            throw new Error("Failed to fetch user");
          }

          setUser(res.data.data);
        }
      } catch (err) {
        console.error("User fetch error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// usage demo

// const { user } = useUser();

// if (!user) return <p>Loading user...</p>;
