import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

// Define User interface as you've done
interface User {
  additionalDetails: {
    school: string;
    scoutNumber: string;
    rank: string;
    dateOfMembership: Date;
  };
  _id: string;
  name: string;
  userLevel: string;
  email: string;
  password: string;
}

// Define the AuthContext type
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  onLogout: () => void;
}

// Initialize AuthContext with `AuthContextType | null`
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      setUser(parsedUser);
      setIsAuthenticated(true);
      if (parsedUser.userLevel === "superAdmin") {
        navigate("/admin/account");
      } else if (parsedUser.userLevel === "unitLeader") {
        navigate("/leader/account");
      } else if (parsedUser.userLevel === "scout") {
        navigate("/scout/account");
      }
    } else {
      if (!isAuthenticated) {
        navigate("/");
      }
    }
  }, []);

  const onLogout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
