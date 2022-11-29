'use strict';
module.exports = ({ strapi }) => ({
  async getall(query) {
    console.log(query);
    strapi.db.query("plugin::reminderapp.reminder").updateMany({
      where: {
        datetime: {
          $lt: new Date()
        }
      },
      data: {
        isdatepassed: true
      }
    })
    const q = strapi.entityService.findMany("plugin::reminderapp.reminder", {
      filters: {
        isdatepassed: {
          $eq: false
        }
      }
    });
    return await q;
  },
  async deleteReminder(id) {
    return await strapi.entityService.delete("plugin::reminderapp.reminder", id);
  },

  async createReminder(data) {
    return await strapi.entityService.create("plugin::reminderapp.reminder", data);
  },

  async updateReminder(id, data) {
    return await strapi.entityService.update("plugin::reminderapp.reminder", id, data);
  },
});