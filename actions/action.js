"use strict";
let datafire = require('datafire');

let hacker_news = require('@datafire/hacker_news').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let item = await hacker_news.getItem({
      itemID: 4457,
    }, context);
    return item;
  },
});
