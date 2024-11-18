import NavigationBar from "../../components/admin/NavigationBar";
import { useAuth } from "../../context/AuthProvider";

const Account = () => {
  const { onLogout } = useAuth();

  return (
    <>
      <NavigationBar />
      <div>
        <p onClick={onLogout} className="cursor-pointer">
          Admin Account
        </p>
      </div>
    </>
  );
};

export default Account;
