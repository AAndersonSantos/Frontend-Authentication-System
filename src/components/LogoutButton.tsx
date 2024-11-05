import axios from "axios";
import { useRouter } from "next/router";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8081/auth/logout", {}, { withCredentials: true }
      );

      router.push("/auth/login");
      
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return <button className={className} onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;
