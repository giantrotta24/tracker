import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_HABIT = gql`
  mutation addHabit($habit: HabitInput) {
    addHabit(habit: $habit) {
      _id
      name
    }
  }
`;

const HabitForm = ({ setHabits }) => {
  const [addHabit] = useMutation(ADD_HABIT, {
    refetchQueries: ['getHabits'],
  });

  const handleSubmit = (values, actions) => {
    addHabit({
      variables: {
        habit: {
          name: values.habit,
        },
      },
    });

    actions.setFieldValue('habit', '');
  };

  return (
    <Formik initialValues={{ habit: '' }} onSubmit={handleSubmit}>
      {(context) => {
        const handleCancel = () => {
          context.setFieldValue('habit', '');
        };

        return (
          <Form>
            <Field placeholder="Enter your next habit" name="habit" />
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
