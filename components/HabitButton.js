import { useState } from 'react';

const HabitButton = ({ date }) => {
  const [isComplete, setComplete] = useState(false);

  // javascript getMonth returns 0-11 😒
  const month = date.getMonth() + 1;
  const monthDate = date.getDate();

  return (
    <span>
      {month}/{monthDate}
      <button onClick={() => setComplete(!isComplete)}>
        {isComplete ? 'X' : 'O'}
      </button>
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
