import React from "react";
import styles from "./Events.module.scss";
import useFetchEvents from "../Hooks/useFetchEvents";
import { useFetchCurrentUser } from "@/hooks/fetchCurrentUser";
import RepoDetails from "./RepoDetails";

export default function EventComponent() {
  let { currentUser } = useFetchCurrentUser();
  let { events } = useFetchEvents(currentUser.login);

  return (
    <div className={styles.eventsMain}>
      {events?.map(
        (event: {
          type:
            | "ForkEvent"
            | "WatchEvent"
            | "PushEvent"
            | "CreateEvent"
            | "IssueCommentEvent";
          payload: {
            commits: {
              sha: "";
              message: "";
            };
            forkee: {
              full_name: "";
            };
          };
          repo: {
            name: "";
          };
          actor: {
            login: "";
            avatar_url: "";
          };
        }) => {
          return (
            <div>
              {event?.type === "PushEvent" ? (
                <div className={styles.forks}>
                  <img
                    className={styles.forkeeAvatar}
                    src={event.actor.avatar_url}
                  />
                  <div>
                    <span className={styles.actorName}>
                      {event?.actor?.login}
                    </span>{" "}
                    <span>pushed to </span>
                    <span className={styles.actorName}>{event.repo.name}</span>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {event?.type === "ForkEvent" ? (
                <div className={styles.forks}>
                  <img
                    className={styles.forkeeAvatar}
                    src={event.actor.avatar_url}
                  />
                  <div>
                    <span className={styles.actorName}>
                      {event?.actor?.login}
                    </span>{" "}
                    <span>forked </span>
                    <span className={styles.actorName}>
                      {event.payload.forkee.full_name}
                    </span>{" "}
                    from{" "}
                    <span className={styles.actorName}>{event.repo.name}</span>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {event?.type === "WatchEvent" ? (
                <div className={styles.forks}>
                  <img
                    className={styles.forkeeAvatar}
                    src={event.actor.avatar_url}
                  />
                  <div>
                    <span className={styles.actorName}>
                      {event?.actor?.login}
                    </span>{" "}
                    <span>starred </span>
                    <span className={styles.actorName}>{event.repo.name}</span>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {event?.type === "CreateEvent" ||
              event?.type === "IssueCommentEvent" ? (
                <></>
              ) : (
                <div className={styles.eventRepoCard}>
                  <RepoDetails
                    eventType={event?.type}
                    payload={event.payload}
                    repoName={event.repo.name}
                  />
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}
