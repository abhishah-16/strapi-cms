module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'task.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/count',
    handler: 'task.count',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/create',
    handler: 'task.createTask',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler: 'task.find',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "task.delete",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "task.toggle",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "task.update",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/updateStatus/:id",
    handler: "task.updateStatus",
    config: {
      policies: [],
      auth: false,
    },
  },
];
