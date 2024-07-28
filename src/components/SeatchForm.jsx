import React, { useState, useEffect } from 'react';
import { searchPets, fetchPets } from '../services/api';
import PropTypes from 'prop-types';

const SearchForm = ({ setPets, resetPage }) => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!animal || !location || !breed) {
        const allPets = await fetchPets(); // Fetch all pets if any field is empty
        setPets(allPets.pets);
        
      } else {
        const pets = await searchPets(animal, location, breed);
        setPets(pets.pets);
 
        resetPage();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const allPets = await fetchPets();
        setPets(allPets.pets);
      } catch (err) {
        console.error(err);
      }
    };

    if (!animal || !location || !breed) {
      fetchAllPets();
    }
  }, [animal, location, breed, setPets]);

  const clearInput = (setter) => () => setter('');

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col">
          <div className="input-group input-group-sm">
            <input 
              value={animal} 
              onChange={(e) => setAnimal(e.target.value)} 
              placeholder="Animal" 
              className="form-control form-control-sm" 
              required
            />
            
          </div>
        </div>
        <div className="col">
          <div className="input-group input-group-sm">
            <input 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="Location" 
              className="form-control form-control-sm" 
              required
            />
            
          </div>
        </div>
        <div className="col">
          <div className="input-group input-group-sm">
            <input 
              value={breed} 
              onChange={(e) => setBreed(e.target.value)} 
              placeholder="Breed" 
              className="form-control form-control-sm" 
              required
            />
            
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success btn-sm w-100">Search</button>
        </div>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  setPets: PropTypes.func.isRequired,
};

export default SearchForm;
