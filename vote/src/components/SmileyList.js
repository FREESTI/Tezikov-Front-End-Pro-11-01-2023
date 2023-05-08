import React from 'react';
import Smiley from './Smiley';

function SmileyList({ votes, handleVote }) {
  return (
    <div className="smiley-list">
      <Smiley
        image="/images/smiley1.png"
        alt="Smiley 1"
        votes={votes[0]}
        handleVote={() => handleVote(0)}
      />
      <Smiley
        image="/images/smiley2.png"
        alt="Smiley 2"
        votes={votes[1]}
        handleVote={() => handleVote(1)}
      />
      <Smiley
        image="/images/smiley3.png"
        alt="Smiley 3"
        votes={votes[2]}
        handleVote={() => handleVote(2)}
      />
    </div>
  );
}

export default SmileyList;
