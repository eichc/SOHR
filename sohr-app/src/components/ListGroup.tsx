import React from "react";


export default function ListGroup() {
    const cities = [
        'Boston',
        'New York',
        'Chicago',
        'Los Angeles',
        'London'
    ];
    
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {cities.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    );
}