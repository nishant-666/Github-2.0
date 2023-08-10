export const fetchCurrentUser = () => {
  const token = process.env.GITHUB_TOKEN;

  fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("User login:", data.login);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
