'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('reminderapp')
      .service('myService')
      .getWelcomeMessage();
  },
});
