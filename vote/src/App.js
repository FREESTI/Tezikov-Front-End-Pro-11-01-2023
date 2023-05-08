import React, { useState } from 'react';
import SmileyList from './components/SmileyList';

function App() {
  const [votes, setVotes] = useState([0, 0, 0]);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (smileyIndex) => {
    const newVotes = [...votes];
    newVotes[smileyIndex] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="App">
      <h1>Голосуем</h1>
      <SmileyList votes={votes} handleVote={handleVote} />
      <button onClick={() => setShowResults(true)}>Show Results</button>
      {showResults && (
        <div>
          <h2>Победитель:</h2>
          <img
            src={`/images/smiley${votes.indexOf(Math.max(...votes)) + 1}.png`}
            alt="Winning Smiley"
          />
        </div>
      )}
    </div>
  );
}

export default App;
