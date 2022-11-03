import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import { signIn, signOut } from "next-auth/react";
import Button, { Variant } from "../common/Button";

type Props = {};

function HomeScreen({}: Props) {
  const handleClick = () => {
    signOut();
  };
  return (
    <div>
      <Button variant={Variant.Danger} onClick={handleClick}>
        Sign Out
      </Button>
    </div>
  );
}

export default HomeScreen;
