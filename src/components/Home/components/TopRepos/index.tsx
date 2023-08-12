import React, { useEffect, useState } from "react";
import styles from "./Toprepos.module.scss";
import getTopRepos from "../../Hooks/getTopRepos";
import { useFetchCurrentUser } from "@/hooks/fetchCurrentUser";
import { useRouter } from "next/router";

export default function TopRepos() {
  let { currentUser } = useFetchCurrentUser();
  let { topRepos } = getTopRepos(currentUser.login);
  const router = useRouter();
  return (
    <div className={styles.topRepos}>
      <div className={styles.headContainer}>
        <p className={styles.header}>Top Repositories</p>

        <button
          onClick={() => router.push("/NewRepo")}
          className={`btn btn-accent btn-sm ${styles.addBtn}`}
        >
          New
        </button>
      </div>
      <div className={styles.repoList}>
        {topRepos.map((repo: { full_name: "" }, index) => (
          <div className={styles.repoInner} key={index}>
            <img
              className={styles.currentUserImage}
              src={currentUser.avatar_url}
            />
            <p className={styles.repoName}>{repo.full_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
