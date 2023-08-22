// ./src/libs/butter.js
const butter = require("buttercms");
const Butter = butter(process.env.READ_TOKEN);
module.exports = Butter;