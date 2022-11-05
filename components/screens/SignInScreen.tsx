import React, { BaseSyntheticEvent } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";

const SignInScreen = ({ providers }: any) => {
  const handleClick = () => {
    signIn();
  };
  return (
    <>
      <h1 className="my-6 text-xl font-bold text-black">Welcome to E class</h1>
      {Object.values(providers).map((provider: any, i) => {
        return (
          <div key={i}>
            <button
              className="w-15 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => signIn(provider.id)}
            >
              Sign In With {provider.name}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SignInScreen;
