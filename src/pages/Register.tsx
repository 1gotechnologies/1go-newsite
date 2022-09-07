import { FormEventHandler, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PhoneInput from "../components/PhoneInput";
import { Btn, Input } from "../components/Styled";
import MainLayout from "../layout/MainLayout";
import {
  checkEmail,
  checkPassword,
  checkPasswordLength,
  checkPasswordLowercase,
  checkPasswordNumberSymbol,
  checkPasswordUppercase,
  matchPassword,
} from "../utils/formValidation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const register: FormEventHandler = async (e) => {
    e.preventDefault();
    if (checkPassword(password)) console.log("register");
  };

  return (
    <MainLayout auth title="Register">
      <form
        onSubmit={register}
        className="w-full relative min-h-full flex flex-wrap items-end md:items-center justify-around gap-7 md:gap-2 md:p-10"
      >
        <div className="container lg:w-[35%] text-center lg:text-left flex flex-col gap-6 grow self-start lg:py-[5rem]">
          <h4 className="text-[32px] md:text-3xl lg:text-4xl md:font-bold">
            Register
          </h4>
        </div>
        <div className="grow w-full lg:w-[60%] min-h-[50%] flex lg:border-[#ccc] border-0 lg:border-l-2 lg:pl-10 container flex-col justify-between gap-5 md:py-5">
          {/* name */}
          <div className="flex gap-4 w-full">
            <div className="w-[0.8/2] grow">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="w-[0.8/2] grow">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          {/* email */}
          <div className="my-3 flex flex-wrap">
            <Input
              className={`my-3  text-lg !pr-8 
                 ${
                   email.length && !checkEmail(email)
                     ? " focus:!border-b-[red] "
                     : " focus:!border-b-[#1F66D0]"
                 }`}
              type={"email"}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {!checkEmail(email) && (
              <small
                className={
                  !email.length
                    ? "hidden "
                    : "" +
                      " w-full text-[red] capitalize text-right leading-none"
                }
              >
                invalid email format
              </small>
            )}
          </div>

          {/* phone number */}
          <PhoneInput
            className="my-3 text-lg "
            number={phone}
            setNumber={setPhone}
            border
            style={{ number: " text-lg p-[0.5rem]" }}
          />

          {/* password */}
          <div className="flex items-center">
            <Input
              className={`my-3 text-lg !pr-8 ${
                password.length && !checkPassword(password)
                  ? " focus:!border-b-[red] "
                  : " focus:!border-b-[#1F66D0]"
              }`}
              type={!showPwd ? "password" : ""}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Btn
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="!absolute !right-0 md:!right-10"
            >
              {!showPwd && <VscEye size={"24px"} className="opacity-50" />}
              {showPwd && <VscEyeClosed size={"24px"} className="opacity-50" />}
            </Btn>
          </div>

          {/* password errors */}
          <ul className="list-disc px-5 text-[grey]">
            <li
              className={
                password.length && !checkPasswordLength(password)
                  ? "text-[red]"
                  : ""
              }
            >
              Password should be 6-12 characters
            </li>
            <li
              className={
                password.length && !checkPasswordUppercase(password)
                  ? "text-[red]"
                  : ""
              }
            >
              Password should have an upper case letter
            </li>
            <li
              className={
                password.length && !checkPasswordLowercase(password)
                  ? "text-[red]"
                  : ""
              }
            >
              Password should have a lower case letter
            </li>
            <li
              className={
                password.length && !checkPasswordNumberSymbol(password)
                  ? "text-[red]"
                  : ""
              }
            >
              Password should have a number or symbol
            </li>
          </ul>

          {/* password confirmation */}
          <div className="flex items-center flex-wrap">
            <Input
              className={`my-3 text-lg !pr-8 ${
                passwordConfrim.length &&
                !matchPassword(password, passwordConfrim)
                  ? " focus:!border-b-[red] "
                  : " focus:!border-b-[#1F66D0] "
              }`}
              type={!showPwd ? "password" : ""}
              placeholder="Re-type Password"
              value={passwordConfrim}
              onChange={(e) => {
                setPasswordConfrim(e.target.value);
              }}
            />
            <Btn
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="!absolute !right-0 md:!right-10"
            >
              {!showPwd && <VscEye size={"24px"} className="opacity-50" />}
              {showPwd && <VscEyeClosed size={"24px"} className="opacity-50" />}
            </Btn>

            {!matchPassword(password, passwordConfrim) && (
              <small
                className={
                  !passwordConfrim.length
                    ? "hidden "
                    : "" +
                      " w-full text-[red] capitalize text-right leading-none"
                }
              >
                passwords do not match
              </small>
            )}
          </div>
          <div className="grow " />
          <small className="w-[80%] sm:w-[60%] md:w-[80%] font-thin ">
            By registering, I agree to the Privacy policy and Terms of use
          </small>
          <div className="grow " />
          <Btn className="bg-blue-700 text-white font-semibold !py-4 transition-all duration-500 shadow-lg shadow-slate-300 hover:bg-opacity-50 w-full rounded-full">
            Register
          </Btn>

          <div className="flex items-center justify-center gap-3">
            Already have an account?
            <Link to={"/login"} className="text-[#1F66D0] text-lg">
              Login
            </Link>
          </div>
        </div>
      </form>
    </MainLayout>
  );
}
