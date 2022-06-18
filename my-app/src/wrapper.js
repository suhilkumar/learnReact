import React from 'react';

const wrapper =(WrapperComponent) =>{
const newComponent = () => {
    return (
        <div style= {{backgroundColor:'green'}}>
            <WrapperComponent />
        </div>
    )
}


    return newComponent ;
}

export default wrapper;