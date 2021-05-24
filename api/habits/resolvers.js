export const habitsResolvers = {
  Query: {
    async habits() {
      console.log('query habits');
      return [
        {
          _id: 'somefunkyid',
          name: 'Do the dishes',
        },
      ];
    },
  },
};
