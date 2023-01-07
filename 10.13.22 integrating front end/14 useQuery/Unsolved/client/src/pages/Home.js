import React from 'react';
// TODO: Add code to import the `useQuery()` hook from @apollo/client

import ThoughtList from '../components/ThoughtList';

// TODO: Add code to import the `QUERY_THOUGHTS` from utils/queries

const Home = () => {
  // TODO: Add code to query for thought data using `useQuery()` and return the `loading` and `data` properties to use.

  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
