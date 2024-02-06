import React from "react";

function Message() {
    return (
        <>
            <h1>Hello, my name is Cam!</h1>
        </>

    );
}

export default function MyFirstApp() {
    return (
        <div>
            <h1>First React element</h1>
            <Message />
        </div>

    );
}