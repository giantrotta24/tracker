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

  // is the date coming in equal to the date on the button
  const foundDate = (events || []).find((event) => {
    const eventDate = new Date(event.date); // comes in as date string, so convert to Date
    return eventDate.getDate() === date.getDate();
  });

  // javascript getMonth returns 0-11 😒
  const month = date.getMonth() + 1;
  const monthDate = date.getDate();

  const handleClick = () => {
    foundDate
      ? removeEvent({
          variables: {
            habitId,
            eventId: foundDate._id,
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
      <button onClick={handleClick}>{foundDate ? 'X' : 'O'}</button>
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
