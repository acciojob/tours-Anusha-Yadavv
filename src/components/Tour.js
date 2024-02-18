import React, { useState } from 'react';

function Tour({ tour, removeTour }) {
  const [showAllInfo, setShowAllInfo] = useState(false);

  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setShowAllInfo(!showAllInfo);
  };

  const displayInfo = showAllInfo ? info : info.split(' ').slice(0, 200).join(' ') + '...';

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <p>{displayInfo}</p>
        <button onClick={toggleInfo}>
          {showAllInfo ? 'Show less' : 'Read more'}
        </button>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </article>
  );
}

export default Tour;
