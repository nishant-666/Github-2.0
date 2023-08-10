export const fetchCurrentUser = () => {
  const token =
    "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";

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
