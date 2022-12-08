module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      playgroundAlways: true,
      //depthLimit: 10,
      //amountLimit: 100,
      apolloServer: {
        tracing: true,
        //introspection: true,
      },
    },
  },
};