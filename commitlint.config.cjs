module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
    "subject-case": [2, "always", ["lower-case", "sentence-case", "start-case"]],
  },
};
