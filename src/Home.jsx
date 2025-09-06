import React from "react";
import Jobs from "./Jobs";

const Home = ({ onAddFavorite }) => {
  return (
    <div className="p-6 bg-blue-100/30">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      
      <Jobs onAddFavorite={onAddFavorite} /> {/* pass the prop */}
    </div>
  );
};

export default Home;
