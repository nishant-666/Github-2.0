import React from "react";
import { signIn, signOut } from "next-auth/react";
import styles from "./Auth.module.scss";
import CommonButton from "../common/Button";
import HomeComponent from "@/components/Home";
import { fetchSession } from "@/hooks/fetchSession";

export default function Authenticate() {
  let { session } = fetchSession();

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
