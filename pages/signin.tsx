import React from "react";
import { getProviders } from "next-auth/react";

type Props = {};

const signin = (props: Props) => {
  return <div>signin</div>;
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

export default signin;
