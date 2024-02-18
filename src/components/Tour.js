import React, { useState } from 'react';

function Tour({ tour, removeTour }) {
  const [showInfo, setShowInfo] = useState(false);

  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <p>
          {showInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={toggleInfo}>
            {showInfo ? 'Show less' : 'Show more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </article>
  );
}

export default Tour;
