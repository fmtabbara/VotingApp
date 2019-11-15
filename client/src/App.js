import React from 'react';
import Bar from './components/bar/bar';
import { partiesReducer, initialState, LOAD_DATA, ADD_VOTE } from './reducer';
import './App.css';

export const enumParties = {
  LABOUR: "LABOUR",
  CONSERVATIVES: "CONSERVATIVES",
  LIBDEMS: "LIBDEMS",
  GREEN: "GREEN",
  BREXIT: "BREXIT",
  OTHER: "OTHER",
};

const makeRequest = (party) => {
  const opts = {
    method:"POST",
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({party}),
  }
  fetch("http://localhost:4001/api", opts)
    .then(res => res.ok)
    .catch(err => console.log(err))
};

function App() {

  const [state, dispatch] = React.useReducer(partiesReducer, initialState)

  React.useEffect(() => {
    fetch("http://localhost:4001/api", {Accept: "application/json"})
      .then(res => {
        res.json()
          .then(data => {
            dispatch({type: LOAD_DATA, data})
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  const weight = window.innerWidth
  const [isDisabled, handleIsDisabled] = React.useState(false)

  const setDisabled = () => {
    handleIsDisabled(true);
  };

  const handleSelect = ({ target: { name, checked } }) => {
    if (checked) {
      dispatch({type: ADD_VOTE, party: name})
      makeRequest(name)
      setDisabled(true);
    }
  };

  return (
    <div className="App">
      <div className="content" style={{left: weight/4}}>
        <div className="title">The People's Poll - UK General Election 2019</div>
        {state.isInitialised ?
        <div className="bar-chart">
          {state.parties.map((party, index) => {
            return (
              <Bar
                isDisabled={isDisabled}
                addVote={handleSelect}
                party={party.name}
                vote={party.votes}
                background={party.color}
                value={(party.votes / state.totalVotes) * weight}
                key={index}
              />
            )
          })}
        </div>
        : "Loading..."}
      </div>
    </div>
  );
}

export default App;
