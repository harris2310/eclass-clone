import React from "react";
import GeneralAnnouncementScreen from "../../../components/screens/GeneralAnnouncementScreen";
import HeaderLayout from "../../../layouts/HeaderLayout";

type Props = {
  announcement: { id: number; date: string; title: string; content: string };
};

const DynamicAnn = ({ announcement }: Props) => {
  return (
    <>
      <HeaderLayout>
        <GeneralAnnouncementScreen announcement={announcement} />{" "}
      </HeaderLayout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  let { id } = context.query;
  id = parseInt(id);
  let announcement = await prisma.announcement.findUnique({
    where: { id: id },
  });
  announcement = JSON.parse(JSON.stringify(announcement));
  console.log(announcement);
  return { props: { announcement } };
}

export default DynamicAnn;
