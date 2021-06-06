import Habits from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const newHabit = await Habits.create({
          ...habit,
        });

        return newHabit;
      } catch (error) {
        console.log(error);
      }
    },

    async addEvent(_, { habitId, date }) {
      console.log('add event'); // TODO: alert the user
    },

    async removeEvent(_, { habitId, eventId }) {
      console.log('remove event'); // TODO: alert the user
    },
  },
};
