import { getAllEvents } from "@/APIs/getGItubAPIs";
import { useEffect, useState } from "react";

export default function useFetchEvents(userName: string) {
  const [events, setEvent] = useState([]);
  const getEvents = async () => {
    let response = await getAllEvents(userName);
    setEvent(response?.data as []);
  };
  useEffect(() => {
    if (userName) {
      getEvents();
    }
  }, [userName]);
  return { events };
}
