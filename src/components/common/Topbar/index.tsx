import React from "react";
import styles from "./Topbar.module.scss";
import CommonInput from "../Input";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <img
          className={styles.logo}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <p className={styles.header}>Dashboard</p>
      </div>
      <div>
        <CommonInput title="Search Anything.." />
      </div>
    </div>
  );
}
