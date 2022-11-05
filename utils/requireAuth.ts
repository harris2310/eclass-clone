import { getSession } from "next-auth/react";

export async function requireAuth(context: any, cb: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return cb();
}
