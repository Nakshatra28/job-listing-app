const JobCard = ({ job, onAddFavorite }) => {
  return (
    <div className="p-4  rounded-lg  shadow bg-white ">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <span>{job.type}</span>
        <button 
        onClick={() => onAddFavorite(job)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default JobCard;
