import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { fetchCurrentUser } from "@/APIs/getUserName";
import TopRepos from "./components/TopRepos";
import EventComponent from "./components/Events";
import ExploreRepos from "./components/ExploreRepos";

export default function HomeComponent() {
  const getCurrentUser = async () => {
    await fetchCurrentUser();
  };

  const getRepos = async () => {};
  useEffect(() => {
    getCurrentUser();
    getRepos();
  }, []);

  return (
    <div className={styles.home}>
      <TopRepos />

      <EventComponent />

      <ExploreRepos />
    </div>
  );
}
