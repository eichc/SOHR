import React from "react";

// function Message() {
//     // return (
//     //     <>
//     //         <h1>Hello, my name is Cam!</h1>
//     //     </>

//     // );
//     return React.createElement(
//         'div', {id: 'hello', class: 'dummyClass'}, 
//         React.createElement('h1', null, 'Hello static Satyam')
//     );
// }

const Message = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} {props.last}
            </h1>
            {props.children}
        </div>
    );
}

export default Message;
