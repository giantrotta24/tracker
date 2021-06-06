import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_EVENT = gql`
  mutation addEvent($date: Date, $habitId: ID) {
    addEvent(date: $date, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: ID, $habitId: ID) {
    removeEvent(eventId: $eventId, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const HabitButton = ({ date, habitId, events }) => {
  // TODO: Update these with optimistic UI
  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: ['getHabits'],
  });

  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getHabits'],
  });

  const isFound = false;

  // javascript getMonth returns 0-11 😒
  const month = date.getMonth() + 1;
  const monthDate = date.getDate();

  const handleClick = () => {
    isFound
      ? removeEvent({
          variables: {
            habitId,
            eventId: 'kjlhgfjkl',
          },
        })
      : addEvent({
          variables: {
            habitId,
            date,
          },
        });
  };

  // TODO: update button X & O with icons (fontawesome?)
  return (
    <span>
      {month}/{monthDate}
      <button onClick={handleClick}>{isFound ? 'X' : 'O'}</button>
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }
        span + span {
          margin-left: 10px;
        }
        button {
          margin-top: 1rem;
          border: none;
        }
      `}</style>
    </span>
  );
};

export default HabitButton;
