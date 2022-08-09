import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'hello', className:'helloClass'},React.createElement('h2',null,'Hello'))
}

export default Hello