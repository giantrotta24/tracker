import HabitButton from "./HabitButton";

const colors = [
  "#718096",
  "#F56565",
  "#F6E05E",
  "#68D391",
  "#63B3ED",
  "#00FF00",
  "#9933FF",
];

const getLast7Days = () => {
  const days = "6543210".split("").map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });

  return days;
};

const Habit = ({ habit, index }) => {
  const dates = getLast7Days();
  return (
    <article>
      <h3 style={{ borderColor: colors[index] }}>{habit}</h3>
      <div className="buttons">
        {dates.map((date) => (
          <HabitButton key={date.getDate()} date={date} />
        ))}
      </div>
      <style jsx>
        {`
          article {
            padding: 20px;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
          }

          h3 {
            margin-top: 0;
            border-bottom: solid 4px;
          }

          .buttons {
            display: flex;
          }
        `}
      </style>
    </article>
  );
};

export default Habit;
