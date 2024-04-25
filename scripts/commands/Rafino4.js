const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/Rxgzdjn.mp4",
  "https://i.imgur.com/UO2vpcV.mp4",
  "https://i.imgur.com/tixoHNL.mp4",
  "https://i.imgur.com/MFfrmm1.mp4",
  "https://i.imgur.com/b013UIg.mp4",
  "https://i.imgur.com/YCoWk4d.mp4",
  "https://i.imgur.com/YcmWfxk.mp4",
  "https://i.imgur.com/9UNpdk7.mp4",
  "https://i.imgur.com/xXPChQC.mp4",
  "https://i.imgur.com/KU7IAAB.mp4",
  "https://i.imgur.com/4fmQKiA.mp4",
  "https://i.imgur.com/tcNQTgd.mp4",
  "https://i.imgur.com/CpmBitZ.mp4",
  "https://i.imgur.com/0Dk0o8G.mp4",
  "https://i.imgur.com/vUKCc50.mp4",
  "https://i.imgur.com/k84GaVW.mp4",
  "https://i.imgur.com/ee3DAUl.mp4",
  "https://i.imgur.com/dr2rnVn.mp4",
  "https://i.imgur.com/XkbNcJl.mp4",
  "https://i.imgur.com/t3FkCKr.mp4"
];

module.exports.config = {
  name: "🤭",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🤭",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("🤭")) {
    const rahad = [
       "-ভালোবাসি আপনাকে 💝MOHAMMAD KABIR🖤",
      "_আপনি কি আমার রাজকন্যা হবেন😌MOHAMMAD KABIR🌻"
    
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🤭"] === "undefined" || data["🤭"]) data["🤭"] = false;
  else data["🤭"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🤭"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
