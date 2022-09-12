import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginComponent from "../components/LoginComponent";

export default function Login() {
  const navigate = useNavigate();

  const oncomplete = () => {
    navigate("/dashboard");
  };

  return (
    <MainLayout auth title="Login">
      <LoginComponent oncomplete={oncomplete} />
    </MainLayout>
  );
}
