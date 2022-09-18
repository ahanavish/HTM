import React from "react";
import './NameCard.css';

const NameCard = ({ suggestedMeds }) => {
    return (
        <div className="result-name-card">
            <p className="result-name">{suggestedMeds}</p>
        </div>
    )
};

export default NameCard;