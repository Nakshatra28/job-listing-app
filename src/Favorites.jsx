import React from 'react';
import Jobcard from './Jobcard';

export default function Favorites({ favorites }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorite Jobs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(job => (
          <Jobcard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
