import React, { useState } from "react";
import { FaEye, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import handleLogin from "../../../api/login";

const InputLogin = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    await handleLogin(userData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 shadow-lg border border-neutral-400 rounded-xl p-3">
        <MdOutlineEmail
          size={23}
          className={`${
            isFocus1 ? "text-red-700" : "text-neutral-900"
          } duration-200`}
        />
        <div className="bg-neutral-400 h-[16px] w-[1px]"></div>
        <input
          className="bg-transparent outline-none"
          type="email"
          placeholder="Enter your email"
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={handleEmail}
        />
      </div>
      <div className="flex items-center gap-3 shadow-lg border border-neutral-400 rounded-xl p-3">
        <MdOutlineLock
          size={23}
          className={`${
            isFocus ? "text-red-700" : "text-neutral-900"
          } duration-200`}
        />
        <div className="bg-neutral-400 h-[16px] w-[1px]"></div>
        <input
          className="bg-transparent outline-none"
          type={isOpen ? "text" : "password"}
          placeholder="Enter your password"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handlePassword}
        />
        {isOpen ? (
          <div onClick={() => setIsOpen(false)}>
            <FaEye className="text-red-700" size={20} />
          </div>
        ) : (
          <div onClick={() => setIsOpen(true)}>
            <FaRegEyeSlash className="opacity-50" size={20} />
          </div>
        )}
      </div>
      <h1 className="text-sm font-medium text-neutral-400 hover:text-neutral-900 cursor-pointer duration-200">
        Forget passowrd?
      </h1>
      <div className="flex flex-col gap-4 items-center w-full mt-10">
        <button
          className="font-medium text-neutral-100 bg-sky-700 shadow-lg w-full p-3 rounded-xl hover:tracking-wider duration-200"
          type="submit"
        >
          Login
        </button>
        <button className="w-fit flex items-center font-medium gap-2 border border-neutral-400 rounded-xl px-10 py-2 group">
          <FaGoogle className="group-hover:text-red-700 duration-200" />
          Google
        </button>
      </div>
    </form>
  );
};

export default InputLogin;
