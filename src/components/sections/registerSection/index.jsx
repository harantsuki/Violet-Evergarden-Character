import { Link } from "react-router-dom";
import InputRegister from "./InputRegister";
import { useMediaQuery } from "react-responsive";

const RegisterSection = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 1197px)" });

  return (
    <div className="container-re relative flex justify-center h-screen">
      <div className="re-wrapper-content z-10 flex justify-center items-center w-[90%]">
        <div className="flex overflow-hidden rounded-xl">
          {isSmall ? (
            <></>
          ) : (
            <div className="greetings-wrapper relative flex flex-col justify-center bg-neutral-900 text-neutral-100 bg-center bg-cover  font-bold text-7xl px-[50px]">
              <div className="mr-20 z-10 text-white">
                <h1 className="text-shadow">Greetings</h1>
                <h2 className="text-shadow">To You.</h2>
              </div>
            </div>
          )}

          <div className="form-register-wrapper flex flex-col items-center gap-12 bg-white p-[50px] w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold text-sky-700">Register</h1>
              <p className="flex flex-col text-neutral-400 font-medium">
                <span>Greetings to You,</span>
                <span>please Register your account.</span>
              </p>
            </div>
            <InputRegister />
            <h3 className="flex gap-1 font-medium text-neutral-400">
              Already have an account?
              <Link
                className="text-neutral-900 underline underline-offset-2 hover:text-red-700 duration-200"
                to="/login"
              >
                Login here
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
