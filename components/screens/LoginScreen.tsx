import React, { BaseSyntheticEvent } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

type FormData = {
  email: any;
  password: any;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: !values.email || !values.password ? {} : values,
    errors:
      !values.email || !values.password
        ? !values.email
          ? {
              email: {
                type: "required",
                message: "Email is required.",
              },
            }
          : {
              password: {
                type: "required",
                message: "Password is required.",
              },
            }
        : {},
  };
};

const LoginScreen = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const handleLoginSubmit = (data: object, e: any) => {
    e.preventDefault();
    signIn();
  };

  return (
    <>
      <main className="text-center">
        <h1 className="my-6 text-xl font-bold text-black">
          Welcome to E class
        </h1>
        <form
          onSubmit={handleSubmit(handleLoginSubmit)}
          className="flex flex-col mt-24 gap-6 w-4/12 m-auto bg-slate-100 p-7"
        >
          <h1 className="font-semibold">YOUR UNISTUDENT CREDENTIALS</h1>
          <input
            {...register("email")}
            placeholder="Email"
            className={
              "shadow appearance-none border rounded w-5/12 m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            type="text"
          />
          {errors?.email && <p>{errors.email.message}</p>}
          <input
            {...register("password")}
            placeholder="Password"
            className="m-auto shadow appearance-none border rounded w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
          />
          {errors?.password && <p>{errors.password.message}</p>}
          <button
            type="submit"
            className="w-15 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Log In
          </button>
        </form>
      </main>
      <footer className="text-center fixed bottom-2 w-full">
        <span>E-class Login Page</span>
      </footer>
    </>
  );
};

export default LoginScreen;
