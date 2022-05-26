import { useState } from 'react';

const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState([]);

  const nextAnecdote = () => {
    if ( (selected + 1) === props.anecdotes.length )
      return setSelected(0);
    return setSelected(selected + 1);
  }

  const anecdoteVoted = (index) => {
    const points = [...voted];
    points[index] = points[index] ? points[index] + 1 : 1;
    setVoted(points);
  }

  const totalVotes = voted.reduce((prev, curr) => prev + (curr || 0), 0);
  let indexMostVotedAnecdote;
  voted.forEach( (totalVotesAnecdote, index) => {
    if (!indexMostVotedAnecdote && totalVotesAnecdote) indexMostVotedAnecdote = index;
    indexMostVotedAnecdote = totalVotesAnecdote > voted[indexMostVotedAnecdote] ? index : indexMostVotedAnecdote 
  });

  console.log(indexMostVotedAnecdote)

  return (
    <div>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {totalVotes} votes
      </div>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={() => anecdoteVoted(selected)}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <div>
        {props.anecdotes[indexMostVotedAnecdote]}
      </div>
      <div>
        has {voted[indexMostVotedAnecdote]}
      </div>
    </div>
  )
}


export default App;
