import React, { useState, useEffect } from 'react';
import PetDetails from './PetDetails';

const PetCard = ({ pet }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!hovered) setCurrentImageIndex(0);
  }, [hovered]);

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
    <div className="col">
      <div className="card h-100">
        <div className="card-body" onClick={() => setShowModal(true)}>
          <div
            className="card-text position-relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {pet.images && pet.images.length > 0 && (
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
                    />
                  ))}
                </div>
                <div className="image-controls">
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={handlePrev}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '50%',
                      padding: '0.2rem',
                      cursor: 'pointer',
                      visibility: currentImageIndex === 0 ? 'hidden' : 'visible',
                    }}
                  >
                    chevron_left
                  </span>
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={handleNext}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '50%',
                      padding: '0.2rem',
                      cursor: 'pointer',
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
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(index);
                        }}
                      ></span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className='d-flex justify-content-between' style={{ color: "grey" }}>
            <span><b>Animal:</b> {pet.animal}</span>
            <span><b>Breed:</b> {pet.breed}</span>
          </div>
          <h5 className='card-title'>{pet.name}</h5>
        </div>
      </div>
      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="modal fade show" style={{ display: 'block', }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" style={{top: '40%', transform: 'translateY(-50%)' }} role="document">
              <div className="modal-content">
                <div className='modal-header justify-content-end'>
                  <button className='btn btn-close' onClick={() => setShowModal(false)}></button>
                </div>
                <PetDetails pet={pet} />
              </div>
            </div>
          </div>
          </div>
        </>
      )}
      <style jsx>{`
      .modal.fade {
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}

.modal.show {
  opacity: 1;
}

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1040; /* Ensure it is below the modal */
        }
        .modal {
          z-index: 1050; /* Ensure it is above the overlay */
        }
      `}</style>
    </div>
  );
};

export default PetCard;
