import React, { useEffect, useState } from "react";
import { getReposByUserName, unStarRepos } from "@/APIs/getGItubAPIs";
import styles from "./Events.module.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import moment from "moment";
import { starRepos, isRepoStarred } from "@/APIs/getGItubAPIs";

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
  const [isStarred, setIsStarred] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getRepoDetails = async () => {
    let response = await getReposByUserName(repoName);
    setRepoData(response);

    let starredResponse = await isRepoStarred(
      response.owner.login,
      response.name
    );

    if (starredResponse) {
      setIsStarred(true);
    }

    setIsLoading(false);
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
      {isLoading ? (
        <></>
      ) : (
        <div
          className={styles.starBtn}
          onClick={() => {
            setIsStarred(!isStarred);
            {
              isStarred
                ? unStarRepos(repoData.owner.login, repoData.name)
                : starRepos(repoData.owner.login, repoData.name);
            }

            // getRepoDetails();
          }}
        >
          {isStarred ? (
            <AiFillStar color="yellow" size={18} />
          ) : (
            <AiOutlineStar size={18} />
          )}
          {isStarred ? <p>Starred</p> : <p>Star</p>}
        </div>
      )}
    </div>
  );
}
