import React from "react";
import './ResultContainer.css';

const ResultContainer = ({ suggestedMeds }) => {
    const suggestMedsJsx = suggestedMeds.map(suggestedMeds => {
        return <p key={suggestedMeds}>{suggestedMeds}</p>;
    })

    return (
        < div className="results-container">
            {suggestMedsJsx}
        </ div >
    )
}

export default ResultContainer;