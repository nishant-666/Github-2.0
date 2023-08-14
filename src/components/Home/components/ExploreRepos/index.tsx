import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { listPublicRepos } from "@/APIs/getGItubAPIs";
import DividerComp from "@/components/common/Divider";
import { AiOutlineStar } from "react-icons/ai";
import { formatNumberToShort } from "@/helpers";
import { languages } from "@/constants/colorCodes";

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
            id: "";
            full_name: "";
            owner: {
              avatar_url: "";
            };
            language: "";
            description: "";
            stargazers_count: "";
          }) => (
            <div key={repo.id} className={styles.repoInner}>
              <div className={styles.repoHeader}>
                <img className={styles.avatar} src={repo.owner.avatar_url} />
                <p className={styles.repoName}>{repo.full_name}</p>
              </div>

              <p className={styles.description}>
                {repo.description ? repo.description : "No Description"}
              </p>

              <div className={styles.footer}>
                <div className={styles.starIcon}>
                  <AiOutlineStar />{" "}
                  <span>
                    {formatNumberToShort(Number(repo.stargazers_count))}
                  </span>
                </div>
                <span className={styles.languageBox}>
                  {languages
                    .filter((lang) => lang.name === repo.language)
                    .map((item) => (
                      <div
                        style={{ backgroundColor: item.backgroundColor }}
                        className={styles.langAvatar}
                      ></div>
                    ))}

                  <span>{repo.language}</span>
                </span>
              </div>
              <DividerComp />
            </div>
          )
        )}
      </div>
    </div>
  );
}
