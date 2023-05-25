import React from 'react';
import './Smiley.css';

function Smiley({ image, alt, votes, handleVote }) {
  return (
    <div className="smiley">
      <img src={image} alt={alt} onClick={handleVote} />
      <p>{votes} votes</p>
    </div>
  );
}

export default Smiley;
