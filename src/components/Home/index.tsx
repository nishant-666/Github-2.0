import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { fetchCurrentUser } from "@/APIs/getUserName";
import CommonButton from "../common/Button";
import TopRepos from "./TopRepos";

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
    <div>
      <TopRepos />
    </div>
  );
}
