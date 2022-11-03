import React, { BaseSyntheticEvent } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/react";

const LoginScreen = () => {
  const handleClick = () => {
    signIn();
  };

  return (
    <>
      <main className="text-center">
        <h1 className="my-6 text-xl font-bold text-black">
          Welcome to E class
        </h1>
        <button
          onClick={handleClick}
          type="submit"
          className="w-15 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Log In
        </button>
      </main>
    </>
  );
};

export default LoginScreen;
