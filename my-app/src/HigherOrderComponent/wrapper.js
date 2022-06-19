import React from 'react';

const wrapper =(WrapperComponent) =>{
const newComponent = props => {
    return (
        <div style= {{backgroundColor:'green'}}>
            {/* //this is not a correct approach instead you use spread operator */}
            {/* <WrapperComponent name='Suhil' age={props.age} mobileNo={props.mobileNo} /> */}
            
            {/* //the correct approach */}
            <WrapperComponent name='Suhil' {...props} />
        </div>
    )
}


    return newComponent ;
}

export default wrapper;