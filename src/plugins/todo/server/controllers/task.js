'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('todo')
      .service('task')
      .getWelcomeMessage();
  },
  async count(ctx) {
    ctx.body = await strapi
      .plugin('todo')
      .service('task')
      .count()
  },
  async createTask(ctx) {
    try {
      ctx.body = await strapi
        .plugin("todo")
        .service("task")
        .createTask(ctx.request.body)
    } catch (error) {
      ctx.throw(500, error)
    }
  },
  async find(ctx) {
    try {
      return await strapi.plugin("todo").service("task").find(ctx.query)
    } catch (error) {
      ctx.throw(500, error)
    }
  },
  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("todo")
        .service("task")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async toggle(ctx) {
    try {
      ctx.body = await strapi
        .plugin("todo")
        .service("task")
        .toggle(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("todo")
        .service("task")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

});
