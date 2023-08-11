import { useSession } from "next-auth/react";

export const fetchSession = () => {
  const { data: session } = useSession();

  return { session };
};
