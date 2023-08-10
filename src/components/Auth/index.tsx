import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Auth.module.scss";
import CommonButton from "../common/Button";
import HomeComponent from "@/components/Home";

export default function Authenticate() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <HomeComponent />
        {/* <div className={styles.signInBtn}>
          <CommonButton onClick={() => signOut()} title="Sign Out" />
        </div> */}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <CommonButton onClick={() => signIn()} title="Sign In" />
    </>
  );
}
