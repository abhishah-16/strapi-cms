'use strict';

/**
 * `ratelimit` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  async (ctx, next) => {
    strapi.log.info('In ratelimit middleware.');
    const ratelimit = require("koa2-ratelimit").RateLimit
    const message = [
      {
        messages: [
          {
            id: "Auth.form.error.ratelimit",
            message: "Too many attempts, Please try again in a minute"
          },
        ],
      },
    ]
    return ratelimit.middleware(
      Object.assign(
        {},
        {
          interval: 1 * 60 * 1000,
          max: 5,
          prefixKey: `${ctx.request.path}:${ctx.request.ip}`,
          message,
        },
        config
      )
    )(ctx, next)
  };
};
