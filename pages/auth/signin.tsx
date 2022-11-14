import React from "react";
import { getProviders } from "next-auth/react";
import SignInScreen from "../../components/screens/SignInScreen";
import HeaderLayout from "../../layouts/HeaderLayout";

type Props = {
  providers: any;
  generalAnnouncements: Array<Object>;
};

export default function SignIn({ providers, generalAnnouncements }: Props) {
  return (
    <>
      <HeaderLayout>
        <SignInScreen
          providers={providers}
          generalAnnouncements={generalAnnouncements}
        />
      </HeaderLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  let generalAnnouncements = await prisma.announcement.findMany({
    where: { courseId: 1000 },
  });
  generalAnnouncements = JSON.parse(JSON.stringify(generalAnnouncements));
  console.log(generalAnnouncements);
  return {
    props: { providers, generalAnnouncements },
  };
}
