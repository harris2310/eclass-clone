import React from "react";
import { getProviders, signIn } from "next-auth/react";
import SignInScreen from "../../components/screens/SignInScreen";
import HeaderLayout from "../../layouts/HeaderLayout";

export default function SignIn({ providers }: any) {
  return (
    <>
      <HeaderLayout>
        <SignInScreen providers={providers} />
      </HeaderLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
