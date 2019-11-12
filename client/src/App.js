import React from 'react';
import Bar from './components/bar/bar'
import './App.css';

export const parties = {
  LABOUR: "LABOUR",
  CONSERVATIVE: "CONSERVATIVE",
  LIBDEMS: "LIBDEMS"
};

function App() {
  React.useEffect(() => {
    setWeight(window.innerWidth);
  }, []);
  const [weight, setWeight] = React.useState(0);
  const [total, handleTotal] = React.useState(6);
  const [voteRed, handleVoteRed] = React.useState(3);
  const [voteBlue, handleVoteBlue] = React.useState(2);
  const [voteYellow, handleVoteYellow] = React.useState(1);
  const [isDisabled, handleIsDisabled] = React.useState({
    LABOUR: false,
    CONSERVATIVE: false,
    LIBDEMS: false
  });

  const addVote = (value, party) => {
    if (party === parties.LABOUR) {
      return handleVoteRed(voteRed + value);
    } else if (party === parties.CONSERVATIVE) {
      return handleVoteBlue(voteBlue + value);
    } else if (party === parties.LIBDEMS) {
      handleVoteYellow(voteYellow + value);
    }
  };

  const setDisabled = party => {
    const newState = { ...isDisabled };
    for (let name in newState) {
      if (name !== party) {
        newState[name] = !newState[name];
      } else {
        newState[name] = false;
      }
    }
    handleIsDisabled(newState);
  };

  const handleSelect = ({ target: { name, checked } }) => {
    if (checked) {
      handleTotal(total + 1);
      addVote(1, name);
      setDisabled(name);
    } else {
      handleTotal(total - 1);
      addVote(-1, name);
      setDisabled(name);
    }
  };
  return (
    <div className="App">
      <h2>Who's getting your vote this election?</h2>
      <Bar
        isDisabled={isDisabled.CONSERVATIVE}
        addVote={handleSelect}
        party={parties.CONSERVATIVE}
        vote={voteBlue}
        background="blue"
        value={(voteBlue / total) * weight}
      />
      <Bar
        isDisabled={isDisabled.LABOUR}
        addVote={handleSelect}
        party={parties.LABOUR}
        background="red"
        vote={voteRed}
        value={(voteRed / total) * weight}
      />
      <Bar
        isDisabled={isDisabled.LIBDEMS}
        addVote={handleSelect}
        party={parties.LIBDEMS}
        vote={voteYellow}
        background="orange"
        value={(voteYellow / total) * weight}
      />
    </div>
  );
}

export default App;
