import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { fetchCurrentUser } from "@/APIs/getUserName";
import CommonButton from "../common/Button";
import { getAllUserRepos } from "@/APIs/getGItubAPIs";
import Topbar from "../common/Topbar";

export default function HomeComponent() {
  const getCurrentUser = async () => {
    await fetchCurrentUser();
  };

  const getRepos = async () => {
    let response = await getAllUserRepos("nishant-666");
    console.log(response.data);
  };
  useEffect(() => {
    getCurrentUser();
    getRepos();
  }, []);
  return (
    <div>
      <Topbar />
    </div>
  );
}
