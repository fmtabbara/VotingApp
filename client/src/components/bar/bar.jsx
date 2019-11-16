import React from "react";
import "./styles.css";

const Bar = ({ isDisabled, addVote, background, party, value, vote, checked }) => {
  return (
    <div className="vote__container">
      <input
        className="vote__input"
        disabled={isDisabled}
        type="checkbox"
        name={party}
        onClick={addVote}
        style={{cursor:isDisabled ? "" : "pointer"}}
        checked={checked}
      />
      <div className="vote__value">{vote}</div>
      <div>
        <div className="vote__party">{party}</div>
        <div className="vote__bar" style={{ background, width: value }} />
      </div>
    </div>
  );
};

export default Bar;
