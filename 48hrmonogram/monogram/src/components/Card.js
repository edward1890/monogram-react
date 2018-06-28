import React from 'react';

const Card = (props) => (
    <div style={{ fontFamily: props.font }}>
        {/* <h2>{ props.font }</h2> */}
        <p>{ props.inputText }</p>
    </div>
);

export default Card;