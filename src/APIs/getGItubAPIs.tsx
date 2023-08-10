import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getAllUserRepos = (userName: string) => {
  let response = octokit.request(
    `GET /users/${userName}/repos?per_page=10&sort=created`,
    {
      username: "USERNAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return response;
};
