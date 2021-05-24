import { Formik, Field, Form } from 'formik';

const HabitForm = ({ setHabits }) => {
  const handleSubmit = (values) => {
    console.log(values);
    setHabits((prevState) => [...prevState, values.habit]);
  };

  return (
    <Formik initialValues={{ habit: '' }} onSubmit={handleSubmit}>
      {(context) => {
        const handleCancel = () => {
          context.setFieldValue('habit', '');
        };

        return (
          <Form>
            <Field placeholder="Habit" name="habit" />
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HabitForm;
