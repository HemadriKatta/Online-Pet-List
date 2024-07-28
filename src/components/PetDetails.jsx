import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PetDetails = ({ pet }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex < pet.images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="image-container">
            <div
              className="image-slider"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {pet.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pet ${pet.name}`}
                  className="pet-image"
                />
              ))}
            </div>
            <div className="image-controls">
              <span
                className="material-symbols-outlined cursor-pointer control-left"
                onClick={handlePrev}
                style={{
                  visibility: currentImageIndex === 0 ? 'hidden' : 'visible',
                }}
              >
                chevron_left
              </span>
              <span
                className="material-symbols-outlined cursor-pointer control-right"
                onClick={handleNext}
                style={{
                  visibility: currentImageIndex === pet.images.length - 1 ? 'hidden' : 'visible',
                }}
              >
                chevron_right
              </span>
            </div>
            {pet.images.length > 1 && (
              <div className="dots-container">
                {pet.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-between mb-3" style={{ color: "grey" }}>
            <div>
              <span><b>Animal:</b> {pet.animal}</span><br />
              <span><b>Location:</b> {pet.city}, {pet.state}</span>
            </div>
            <span><b>Breed:</b> {pet.breed}</span>
          </div>
          <h1>{pet.name}</h1>
          <p>{pet.description}</p>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .image-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .pet-image {
          flex-shrink: 0;
          width: 100%;
          height: auto;
        }
        .image-controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
        }
        .control-left, .control-right {
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 0.5rem;
          cursor: pointer;
        }
        .dots-container {
          display: flex;
          justify-content: center;
          padding: 1rem 0;
        }
        .dot {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        .dot.active {
          background-color: #717171;
        }
      `}</style>
    </div>
  );
};

PetDetails.propTypes = {
  pet: PropTypes.shape({
    animal: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetDetails;
    