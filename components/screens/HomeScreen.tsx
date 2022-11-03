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
      <div className="text-xl mt-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum nibh
        tellus molestie nunc non blandit massa. Quam lacus suspendisse faucibus
        interdum posuere lorem ipsum dolor. Varius quam quisque id diam vel quam
        elementum pulvinar etiam. Ante metus dictum at tempor commodo
        ullamcorper a lacus vestibulum. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Mattis vulputate enim nulla aliquet
        porttitor lacus luctus. Elementum facilisis leo vel fringilla.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus et. Tristique senectus et netus et. Rhoncus urna
        neque viverra justo nec ultrices. Volutpat blandit aliquam etiam erat
        velit scelerisque in dictum. Nulla facilisi cras fermentum odio eu
        feugiat pretium nibh. Morbi enim nunc faucibus a pellentesque sit. Arcu
        non sodales neque sodales ut. Odio ut enim blandit volutpat maecenas
        volutpat blandit.
      </div>
      <Button variant={Variant.Danger} onClick={handleClick} className="mt-12">
        Sign Out
      </Button>
    </div>
  );
}

export default HomeScreen;
