export const fetchCurrentUser = async () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  let response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  return response.json();
};
