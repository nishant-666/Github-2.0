import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/APIs/getUserName";

export function useFetchCurrentUser() {
  const [currentUser, setCurrentUser] = useState({
    login: "",
    avatar_url: "",
  });

  const getCurrentUserData = async () => {
    let data = await fetchCurrentUser();
    setCurrentUser(data);
  };

  useEffect(() => {
    getCurrentUserData();
  }, []);
  return { currentUser };
}
