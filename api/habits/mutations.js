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
      try {
        date.setHours(0, 0, 0, 0); // set all time coming in to the same
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
            'events.date': { // make sure there is no matching date already in DB
              $ne: date,
            },
          },
          {
            $addToSet: {
              events: {
                date,
              },
            },
          }
        );

        return habit;
      } catch (error) {
        console.log('error', error);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        // find the right one and remove it
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
          },
          {
            $pull: {
              events: {
                _id: eventId,
              },
            },
          }
        );

        return habit;
      } catch (error) {
        console.log('error', error);
      }
    },
  },
};
