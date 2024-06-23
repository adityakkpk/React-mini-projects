import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGithubInfoLoader } from "../../Hooks/useGithubInfoLoader";

function User() {
  const { userid } = useParams();
  const data = useGithubInfoLoader(userid);
  const reposData = useGithubInfoLoader(`${userid}/repos`);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1); // initial page

  const paginatedItems = reposData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(reposData.length / itemsPerPage);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={data.avatar_url}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p className="text-gray-600 text-start">@{data.login}</p>
          </div>
        </div>
        <p className="mt-2 text-gray-900">{data.bio}</p>
        <div className="mt-2">
          <p className="text-gray-900">
            Public Repositories: {data.public_repos}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Repositories</h2>
        {paginatedItems.map((elem, index) => {
          return (
            <a href={`${elem.html_url}`} key={index} target="_blank">
              <div className="mt-4 p-4 cursor-pointer bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{elem.name}</h3>
                <p className="mt-2 text-gray-600">{elem.description}</p>
              </div>
            </a>
          );
        })}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
