import React, { useState } from "react";
import styles from "./Topbar.module.scss";
import CommonInput from "../Input";
import { fetchSession } from "@/hooks/fetchSession";
import DrawerComponent from "../Drawer";
import RideSidebar from "../RightSideBar";

export default function Topbar() {
  let { session } = fetchSession();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <img
          className={styles.logo}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <p className={styles.header}>Dashboard</p>
      </div>
      <div className={styles.right}>
        <CommonInput title="Search Anything.." />
        {session?.user.image ? (
          <img
            onClick={() => setDrawerOpen(true)}
            className={styles.userImage}
            src={session?.user.image}
          />
        ) : (
          <></>
        )}
      </div>
      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
      >
        <RideSidebar />
      </DrawerComponent>
    </div>
  );
}
