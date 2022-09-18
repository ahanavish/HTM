import React from "react";
import './ResultContainer.css';

const ResultContainer = ({ suggestedMeds }) => {
    // const suggestMedsJsx = suggestedMeds.map(suggestedMeds => {
    //     return <p key={suggestedMeds.id}>{suggestedMeds.data}</p>;
    // })

    return (
        < div className="results-container">
            {/* {suggestMedsJsx} */}
            {/* console.log('suggestedMeds'); */}
        </ div >
    )
}

export default ResultContainer;