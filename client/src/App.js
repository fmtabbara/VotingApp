import React from 'react';
import Bar from './components/bar/bar';
import './App.css';

export const parties = {
  LABOUR: "LABOUR",
  CONSERVATIVES: "CONSERVATIVES",
  LIBDEMS: "LIBDEMS"
};

function App() {
  React.useEffect(() => {
    setWeight(window.innerWidth);
<<<<<<< HEAD
    fetch("http://localhost:4001/data", {Accept: "application/json"})
      .then(res => {
        res.json()
          .then(data => {
            data.forEach(item => {
              if (item.name === "Labour") {
                handleVoteRed(item.votes)
              } else if (item.name === "Conservatives") {
                handleVoteBlue(item.votes)
              } else if (item.name === "Lib Dems") {
                handleVoteYellow(item.votes)
              }
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
=======
    fetch("http://localhost:4001/")
      .then(res => {
        res.json()
          .then(data => console.log(data))
      })
>>>>>>> 051f1feca927a3fadf7198040a348fce1effbfe8
  }, []);
  React.useEffect(() => {
    const total = voteRed + voteBlue + voteYellow;
    console.log(total)
    handleTotal(total)
  }, [])
  const [weight, setWeight] = React.useState(0);
  const [total, handleTotal] = React.useState(1);
  const [voteRed, handleVoteRed] = React.useState(1);
  const [voteBlue, handleVoteBlue] = React.useState(1);
  const [voteYellow, handleVoteYellow] = React.useState(1);
  const [isDisabled, handleIsDisabled] = React.useState(false)

  const addVote = (party) => {
    if (party === parties.LABOUR) {
      return handleVoteRed(voteRed + 1);
    } else if (party === parties.CONSERVATIVES) {
      return handleVoteBlue(voteBlue + 1);
    } else if (party === parties.LIBDEMS) {
      handleVoteYellow(voteYellow + 1);
    }
  };

  const setDisabled = party => {
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
      </div>
    </div>
  );
}

export default App;
