'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  async count() {
    return await strapi.query('plugin::todo.task').count()
  },
  async createTask(data) {
    const task = await strapi.entityService.create('plugin::todo.task', data)
    return task
  },
  async find(query) {
    return await strapi.entityService.findMany("plugin::todo.task", query)
  },
  async update(id, data) {
    return await strapi.entityService.update("plugin::todo.task", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::todo.task", id);

    return await strapi.entityService.update("plugin::todo.task", id, {
      data: { isDone: !result.isDone },
    });
  },
  async delete(id) {
    return await strapi.entityService.delete("plugin::todo.task", id);
  },
  async updateStatus(id, data) {
    return await strapi.entityService.update("plugin::todo.task", id, data)
  }
});
