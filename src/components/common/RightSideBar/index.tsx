import React from "react";
import { useFetchCurrentUser } from "@/hooks/fetchCurrentUser";
import styles from "./RightSideBar.module.scss";
import { rightbarOptions } from "@/constants/rightbarItems";
import { signOut } from "next-auth/react";

export default function RideSidebar() {
  let { currentUser } = useFetchCurrentUser();
  return (
    <div className={styles.rightbarMain}>
      <div className={styles.rightbar}>
        <img className={styles.avatar} src={currentUser.avatar_url} />
        <section>
          <p className={styles.username}>{currentUser.login}</p>
          <p className={styles.name}>{currentUser.name}</p>
        </section>
      </div>

      <section className={styles.middleSection}>
        <hr className={styles.hrLine} />

        <div className={styles.option}>
          {rightbarOptions[0]?.icon}
          <span>{rightbarOptions[0]?.option}</span>
        </div>
        <hr className={styles.hrLine} />
        {rightbarOptions
          .filter((item) => item.option !== "Your Profile")
          .map((rightbar) => (
            <div className={styles.option}>
              {rightbar.icon}
              <span>{rightbar.option}</span>
            </div>
          ))}
        <hr className={styles.hrLine} />
        <div onClick={() => signOut()} className={styles.option}>
          <span>Sign Out</span>
        </div>
      </section>
    </div>
  );
}
