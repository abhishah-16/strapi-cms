module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/getall',
    handler: 'reminder.getall',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "reminder.createReminder",
    config: {
      policies: [],
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "reminder.deleteReminder",
    config: {
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "reminder.updateReminder",
    config: {
      policies: [],
    },
  },
];