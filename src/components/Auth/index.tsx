import React from "react";
import { signIn } from "next-auth/react";
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
      </>
    );
  }
  return (
    <div className={styles.noAuth}>
      <CommonButton onClick={() => signIn()} title="Sign In" />
    </div>
  );
}
