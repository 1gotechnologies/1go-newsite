import { FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Btn, Input } from "../components/Styled";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import MainLayout from "../layout/MainLayout";
import { checkEmail, checkPassword } from "../utils/formValidation";
import LoginComponent from "../components/LoginComponent";

export default function Login() {
  const navigate = useNavigate();

  // password should be atleast 8 character long, 1 uppercase, 1 lowercase, 1 number
  const login: FormEventHandler = async (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <MainLayout auth>
      <LoginComponent oncomplete={() => navigate("/dashboard")} />
    </MainLayout>
  );
}
