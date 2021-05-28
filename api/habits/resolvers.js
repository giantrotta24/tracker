export const habitsResolvers = {
  Query: {
    async habits() {
      return [
        {
          _id: 'somefunkyid',
          name: 'Do the dishes',
        },
      ];
    },
  },
};
