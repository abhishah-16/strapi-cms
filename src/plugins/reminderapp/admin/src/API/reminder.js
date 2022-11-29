import { request } from "@strapi/helper-plugin";
const ReminderApiHandler = {
  getAllReminders: async () => {
    return await request("/reminderapp/getall", {
      method: "GET",
    });
  },
  addReminder: async (data) => {
    return await request(`/reminderapp/create`, {
      method: "POST",
      body: { data: data },
    });
  },
  editReminder: async (id, data) => {
    return await request(`/reminderapp/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },
  deleteReminder: async (id) => {
    return await request(`/reminderapp/delete/${id}`, {
      method: "DELETE",
    });
  },
};
export default ReminderApiHandler;