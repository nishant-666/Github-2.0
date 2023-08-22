import React, { useState } from "react";
import styles from "@/styles/Proflie.module.scss";
import { tabList } from "@/constants/profileTabs";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  console.log(router.query.tab);

  const changeTabs = (option: string) => {
    router.query.tab = option;
    router.push(router);
  };
  return (
    <div className={styles.profileMain}>
      <div className={styles.profileTabs}>
        <ul className={styles.tabList}>
          {tabList.map((tab) => (
            <div
              className={
                router.query.tab === tab.key ? styles.activeTab : styles.tabs
              }
              onClick={() => changeTabs(tab.key)}
            >
              {tab.icon}
              <li className={styles.list}>{tab.option}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
