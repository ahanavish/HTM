import React from "react";
import "./NameCard.css";

const NameCard = ({ suggestedMeds }) => {
    return (
        <div className="result-name-card">
            <img src="https://th.bing.com/th/id/OIP.bNTW0f428nPI1TQkStvJBgHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Avatar" />
            <div className="container">
                <h4><b>Paracetamol </b></h4>
                <p>Expiry Date</p>
            </div>
        </div>
    )
}

export default NameCard;