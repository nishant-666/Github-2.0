import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export const authenticate = () => {
  const url = "https://api.github.com/octocat";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export const getAllUserRepos = async (userName: string, limit: number) => {
  let response = await octokit.request(
    `GET /users/${userName}/repos?per_page=${limit}&sort=created`,
    {
      username: userName,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return response;
};

export const createRepo = async (repoData: {
  name: string;
  description: string;
  private: boolean;
}) => {
  await octokit.request("POST /user/repos", {
    ...repoData,
    homepage: "https://github.com",
    is_template: false,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};
