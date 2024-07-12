import React from "react";
import HandleNav from "./Navigation";

const Chatbot = () => {
    return (
        <div className="chatbot" id="chatbot">
            <div className="top-container">
                <div className="logo">
                    <h1>Greenify</h1>
                </div>
                    <HandleNav />
            </div>
        </div>
    );
};

export default Chatbot;