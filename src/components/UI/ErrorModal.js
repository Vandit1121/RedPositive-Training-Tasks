import React from "react";
import Card from "./Card";
import Button from "./Button";


const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConform}/>
        <Card className = "modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.msg}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConform}>Okay</Button>
            </footer>
        </Card>
        </div>
    )
};

export default ErrorModal