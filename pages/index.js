import { withApollo } from '../lib/apollo';
import Layout from '../components/Layout';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

const Home = () => {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Level Up Your Life</h1>
        <div className="list">
          <HabitForm />
          <HabitList />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
