import React from 'react';
import Bar from './components/bar/bar';
import './App.css';

export const parties = {
  LABOUR: "LABOUR",
  CONSERVATIVES: "CONSERVATIVES",
  LIBDEMS: "LIBDEMS"
};

const makeRequest = (party) => {
  const opts = {
    method:"POST",
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({party}),
  }
  fetch("/api", opts)
    .then(res => res.ok)
    .catch(err => console.log(err))
};

function App() {
  React.useEffect(() => {
    fetch("/api", {Accept: "application/json"})
      .then(res => {
        res.json()
          .then(data => {
            let totalVotes = 0;
            data.forEach(item => {
              if (item.name === parties.LABOUR) {
                handleVoteRed(item.votes)
                totalVotes += item.votes
              } else if (item.name === parties.CONSERVATIVES) {
                handleVoteBlue(item.votes)
                totalVotes += item.votes
              } else if (item.name === parties.LIBDEMS) {
                handleVoteYellow(item.votes)
                totalVotes += item.votes
              }
            })
            handleTotal(totalVotes);
          })
          .catch(err => console.log(err));
          handleIsInitialised(true)
      })
      .catch(err => console.log(err));
  }, []);
  const weight = window.innerWidth
  const [isInitialised, handleIsInitialised] = React.useState(false)
  const [total, handleTotal] = React.useState(1);
  const [voteRed, handleVoteRed] = React.useState(0);
  const [voteBlue, handleVoteBlue] = React.useState(0);
  const [voteYellow, handleVoteYellow] = React.useState(0);
  const [isDisabled, handleIsDisabled] = React.useState(false)

  const addVote = (party) => {
    if (party === parties.LABOUR) {
      makeRequest(parties.LABOUR)
      return handleVoteRed(voteRed + 1);
    } else if (party === parties.CONSERVATIVES) {
      makeRequest(parties.CONSERVATIVES)
      return handleVoteBlue(voteBlue + 1);
    } else if (party === parties.LIBDEMS) {
      makeRequest(parties.LIBDEMS)
      handleVoteYellow(voteYellow + 1);
    }
  };

  const setDisabled = () => {
    handleIsDisabled(true);
  };

  const handleSelect = ({ target: { name, checked } }) => {
    if (checked) {
      handleTotal(total + 1);
      addVote(name);
      setDisabled(true);
    }
  };
  return (
    <div className="App">
      <div className="content" style={{left: weight/4}}>
        <div className="title">The People's Poll</div>
        {isInitialised ?
        <div className="bar-chart">
          <Bar
            isDisabled={isDisabled}
            addVote={handleSelect}
            party={parties.CONSERVATIVES}
            vote={voteBlue}
            background="#0066ff"
            value={(voteBlue / total) * weight}
          />
          <Bar
            isDisabled={isDisabled}
            addVote={handleSelect}
            party={parties.LABOUR}
            background="#E4003B"
            vote={voteRed}
            value={(voteRed / total) * weight}
          />
          <Bar
            isDisabled={isDisabled}
            addVote={handleSelect}
            party={parties.LIBDEMS}
            vote={voteYellow}
            background="#FFAE27"
            value={(voteYellow / total) * weight}
          />
        </div>
        : "Loading..."}
      </div>
    </div>
  );
}

export default App;
