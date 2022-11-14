import React from "react";
import { useRouter } from "next/router";

type Props = {};

const DynamicAnn = (props: Props) => {
  const router = useRouter();
  const id = router.query.id as string;
  return <div>hi {id}</div>;
};

export default DynamicAnn;
