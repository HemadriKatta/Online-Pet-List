import React, { useState } from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SeatchForm';

const Home = () => {
  const [pets, setPets] = useState([]);
  const resetPage = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <h1 className="text-center my-4">Online Pet List</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="search-form-container d-flex align-items-center mt-2 gap-2 rounded p-2 pt-1 pb-1">
              <SearchForm setPets={setPets} />  
            </div>
          </div>
        </div>
      </div>
      <div className="pet-list-container">
        <PetList pets={pets} />
      </div>
      <style jsx>{`
        .search-form-container {
          background-color: #007bff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 767px) {
          .search-form-container {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .search-form-container input {
          flex: 1;
          margin: 0.5rem 0;
        }
        .search-form-container button {
          margin-top: 0.5rem;
        }
        .pet-list-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
