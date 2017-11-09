"use strict";
let datafire = require('datafire');

let hacker_news = require('@datafire/hacker_news').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let storyIDs = await hacker_news.getStories({
      storyType: "top",
    }, context);
    return storyIDs;
  },
});
