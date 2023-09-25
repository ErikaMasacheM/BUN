import React from "react";

export default function home(props:{message: String}) {
    return (
    <h1>
        Home: {props.message}
    </h1>
    );
        
}