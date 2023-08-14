import React, { useEffect, useState } from "react";
import { getReposByUserName } from "@/APIs/getGItubAPIs";
import styles from "./Events.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import moment from "moment";

export default function RepoDetails({
  repoName,
  eventType,
  payload,
}: RepoDetails) {
  const [repoData, setRepoData] = useState({
    full_name: "",
    language: "",
    stargazers_count: "",
    updated_at: "",
    name: "",
    owner: {
      login: "",
    },
  });

  const getRepoDetails = async () => {
    let response = await getReposByUserName(repoName);
    setRepoData(response);
  };

  useEffect(() => {
    getRepoDetails();
  }, [repoName]);

  if (eventType === "PushEvent")
    return (
      <div className={styles.repoDetails}>
        <div>
          <p className={styles.repoName}>1 commit to master</p>
          <div className={styles.subCard}>
            <span className={styles.span}>
              {payload.commits[0].sha.substring(0, 7)}
            </span>
            <span className={styles.span}>{payload.commits[0].message}</span>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.repoDetails}>
      <div>
        <p className={styles.repoName}>{repoData.full_name}</p>

        <div className={styles.subCard}>
          <span className={styles.span}>{repoData.language}</span>

          <div className={styles.span}>
            <AiOutlineStar className={styles.icon} size={20} />
            <span>{repoData.stargazers_count}</span>
            <span className={styles.updatedAt}>
              {moment(repoData.updated_at).format("lll")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
