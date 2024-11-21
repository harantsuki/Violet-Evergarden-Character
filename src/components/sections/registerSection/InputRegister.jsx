import React, { useState } from "react";
import { FaEye, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import handleRegister from "../../../api/register";

const InputRegister = () => {
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

    try {
      const result = await handleRegister(userData);
      if (result.success) {
        console.log("User registered successfully");
      } else {
        console.log(result.message || "An error occured");
      }
    } catch (err) {
      console.log("Network error: " + err.message);
    }
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
      <div className="flex flex-col gap-4 items-center w-full mt-10">
        <button
          className="font-medium text-neutral-100 bg-sky-700 shadow-lg w-full p-3 rounded-xl hover:tracking-wider duration-200"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default InputRegister;
