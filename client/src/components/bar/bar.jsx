import React from "react";
import "./styles.css";

const Bar = ({ isDisabled, addVote, background, party, value, vote }) => {
  return (
    <div className="vote__container">
      <input
        className="vote__input"
        disabled={isDisabled}
        type="checkbox"
        name={party}
        onClick={addVote}
      />
      <div className="vote__value">{vote}</div>
      <div>
        <div>{party}</div>
        <div className="vote__bar" style={{ background, width: value }} />
      </div>
    </div>
  );
};

export default Bar;
