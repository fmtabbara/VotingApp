export const LOAD_DATA = "LOAD_DATA";
export const ADD_VOTE = "ADD_VOTE";

export const initialState = {
  parties: [
    {name: "LABOUR", color: "#E4003B", votes: 0},
    {name: "CONSERVATIVES", color: "#0066ff", votes: 0},
    {name: "LIBDEMS", color: "#FFAE27", votes: 0},
    {name: "GREEN", color: "green", votes: 0},
    {name: "BREXIT", color: "purple", votes: 0},
    {name: "OTHER", color: "black", votes: 0}
  ],
  totalVotes: 1,
  isInitialised: false,
  hasVoted: false,
}

export const partiesReducer = (state, action) => {
  const newState = {...state};
  let parties;
  let totalVotes;
  let isInitialised;

  switch (action.type) {
    case LOAD_DATA:
      parties = [...newState.parties];
      totalVotes = newState.totalVotes;
      isInitialised = true;

      parties.forEach((party) => {
        const [match] = action.data.filter(item => party.name === item.name)
        if (match) {
          party.votes = match.votes;
          totalVotes += match.votes;
        }
      });

      return {...newState, parties, totalVotes, isInitialised};

    case ADD_VOTE:
      parties = [...newState.parties];
      totalVotes = newState.totalVotes;

      parties.forEach(party => {
        if(party.name === action.party) {
          party.votes += 1;
          totalVotes += 1;
        }
      });
      return {...newState, totalVotes, parties}

    default:
      return state;
  }
};
