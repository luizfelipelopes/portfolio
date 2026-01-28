const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/luizfelipelopes/luizfelipelopes.github.io.git";

// Increase Git HTTP buffer to handle larger files
process.env.GIT_HTTP_BUFFER = "524288000"; // 500MB

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
    // Add message for the commit
    message: "Deploy to GitHub Pages",
    // Add .nojekyll file to bypass Jekyll processing
    add: true,
  },
  (err) => {
    if (err) {
      console.log("ERROR: ", err);
      console.log("\nTroubleshooting tips:");
      console.log("1. Make sure you have a GitHub Personal Access Token set up");
      console.log("2. Try running: git config --global http.postBuffer 524288000");
      console.log("3. Check if you need to authenticate: git config --global credential.helper store");
    } else {
      console.log("PUBLISHED");
    }
  }
);
