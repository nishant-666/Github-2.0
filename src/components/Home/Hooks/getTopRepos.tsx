import { getAllUserRepos } from "@/APIs/getGItubAPIs";
import { useEffect, useState } from "react";

export default function getTopRepos(userName: string) {
  const [topRepos, setTopRepos] = useState([]);
  const getRepos = async () => {
    let response = await getAllUserRepos(userName, 7);
    setTopRepos(response.data);
  };
  useEffect(() => {
    if (userName) {
      getRepos();
    }
  }, [userName]);
  return { topRepos };
}
