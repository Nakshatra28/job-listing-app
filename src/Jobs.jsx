import { useState } from "react";
import datalist from "./datalist";
import Jobcard from "./Jobcard";

export default function Jobs({ onAddFavorite }) {

  // Calculate jobs for the current page
 const [search, setSearch] = useState("");
const [data, setData] = useState(datalist);

const [currentPage, setCurrentPage] = useState(1);
const jobsPerPage = 9;

// Calculate jobs for the current page
const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob - jobsPerPage;
const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

const totalPages = Math.ceil(data.length / jobsPerPage);


   const handleSearch = () => {
      let res = datalist.filter((item) => {
        if (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
           item.company.toLowerCase().includes(search.toLowerCase()) ||
            item.location.toLowerCase().includes(search.toLowerCase()) ||
             item.salary.toLowerCase().includes(search.toLowerCase()) ||
              item.type.toLowerCase().includes(search.toLowerCase()) 
             
         ) {
          return true;
        }
        return false;
      });
      setData(res);
      
    };

  return (
    <div className="p-6">

      {/* Job Listings */}


  <div className=" mb-5">
     <p className='flex '> {" "} <input className='  mr-2 p-0.5 bg-white rounded-sm shadow-sm shadow-black' onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search'/>
    <button onClick={handleSearch} className='  w-20 rounded-lg text-white font-semibold shadow-sm shadow-black  bg-gradient-to-r from-blue-700 to to-blue-500'   >Search</button>
    </p>
  </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentJobs.map((job) => (
          <Jobcard job={job} key={job.id} onAddFavorite={onAddFavorite} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
