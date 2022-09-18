import React from "react";
import './ResultContainer.css';

const ResultContainer = ({ suggestedMeds }) => {
    const suggestMedsJsx = suggestedMeds.map(suggestedMeds => {
        return <p key={suggestedMeds.id}>{suggestedMeds.data.name}</p>;
    })

    return (
        < div className="results-container">
            {suggestMedsJsx}
        </ div >
    )
}

export default ResultContainer;