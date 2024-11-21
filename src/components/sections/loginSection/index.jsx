import React from "react";
import InputLogin from "./InputLogin";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SectionLogin = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 1197px)" });

  return (
    <div className="container-lo relative bg-white flex justify-center h-screen bg-center bg-cover">
      <div className="lo-wrapper-content z-10 flex justify-center items-center w-[90%]">
        <div className="flex overflow-hidden rounded-xl">
          <div className="form-login-wrapper flex flex-col items-center gap-12 bg-white p-[50px]">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold text-sky-700">Login</h1>
              <p className="flex flex-col text-neutral-400 font-medium">
                <span>Greetings to You,</span>
                <span>please Login your account.</span>
              </p>
            </div>
            <InputLogin />

            <h3 className="flex gap-1 font-medium text-neutral-400">
              Don't have an account?
              <Link
                className="text-neutral-900 underline underline-offset-2 hover:text-red-700 duration-200"
                to="/register"
              >
                Register here
              </Link>
            </h3>
          </div>
          {isSmall ? (
            <></>
          ) : (
            <div className="greetings-wrapper relative flex flex-col justify-center bg-neutral-900 text-neutral-100 bg-center bg-cover font-bold text-7xl px-[50px]">
              <div className="ml-20 z-10 text-end text-white">
                <h1 className="text-shadow">Greetings</h1>
                <h2 className="text-shadow">To You.</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionLogin;
