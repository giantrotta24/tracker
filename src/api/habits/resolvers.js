import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

import Habits from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        const habits = await Habits.find();
        return habits;
      } catch (e) {
        console.log('there was an error', e);
      }
    },
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custome scalar',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client as a string
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};
