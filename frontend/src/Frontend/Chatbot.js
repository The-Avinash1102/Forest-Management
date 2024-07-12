import React from "react";
import HandleNav from "./Navigation";

const Chatbot = () => {
    return (
        <div className="chatbot" id="chatbot">
            <div className="navigation" id="navigation">
                <HandleNav />
            </div>
        </div>
    );
};

export default Chatbot;