import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { listPublicRepos } from "@/APIs/getGItubAPIs";
import DividerComp from "@/components/common/Divider";

export default function ExploreRepos() {
  const [latestRepos, setLatestRepos] = useState([]);
  const getRepos = async () => {
    let response = await listPublicRepos();
    setLatestRepos(response as []);
  };

  useEffect(() => {
    getRepos();
  }, []);
  return (
    <div className={styles.main}>
      <p className={styles.title}>Explore Repositories</p>

      <div>
        {latestRepos.map(
          (repo: {
            full_name: "";
            owner: {
              avatar_url: "";
            };
            description: "";
          }) => (
            <div className={styles.repoInner}>
              <div className={styles.repoHeader}>
                <img className={styles.avatar} src={repo.owner.avatar_url} />
                <p className={styles.repoName}>{repo.full_name}</p>
              </div>

              <p className={styles.description}>
                {repo.description ? repo.description : "No Description"}
              </p>
              <DividerComp />
            </div>
          )
        )}
      </div>
    </div>
  );
}
