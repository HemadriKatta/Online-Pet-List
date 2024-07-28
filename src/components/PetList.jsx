import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

const PetList = ({ pets, }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 4;

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const totalPages = Math.ceil(pets.length / petsPerPage);
  

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="w-100" >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {currentPets && currentPets.length > 0 ? (
            currentPets.map((p, index) => (
              <PetCard key={index} pet={p} />
            ))
          ) : (
            <span>No Pets to display</span>
          )}
        </div>
        {totalPages>1 &&
        <div className="d-flex justify-content-center align-items-center mt-4">
          <span
            className="material-symbols-outlined page-control"
            onClick={handlePrevPage}
            style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            chevron_left
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              className={`page-number  ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <span
            className="material-symbols-outlined page-control"
            onClick={handleNextPage}
            style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            chevron_right
          </span>
        </div>
        }
      </div>
      <style jsx>{`
        .image-controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s, opacity 0.3s;
        }
        .card-text:hover .image-controls {
          visibility: visible;
          opacity: 1;
        }
        .image-container {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          height: auto;
        }
        .image-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }
        .image-slider img {
          display: block;
          max-width: 100%;
          height: auto;
          transition: transform 0.3s ease-in-out;
        }
        .image-slider img:hover {
          transform: scale(1.1);
        }
        .dots-container {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .dot.active {
          background-color: white;
        }
          .page-control {
          margin: 0 1rem;
        }
        .page-number {
          margin: 0 0.5rem;
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          border-radius: 50%;
          transition: background-color 0.3s;
        }
        .page-number.active {
          background-color: #007bff;
          color: white;
        }
        .page-number:hover:not(.active) {
          background-color: rgba(0, 123, 255, 0.1);
        }
        .material-symbols-outlined {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default PetList;
