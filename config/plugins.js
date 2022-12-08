module.exports = {
    'reminderapp': {
      enabled: true,
      resolve: './src/plugins/reminderapp'
    },
    'todo': {
      enabled: true,
      resolve: './src/plugins/todo'
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  }