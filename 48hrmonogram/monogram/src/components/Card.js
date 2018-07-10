import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
    // <div style={{ fontFamily: props.font }}>
    //     {/* <h2>{ props.font }</h2> */}
    //     <p>{ props.inputText }</p>
    // </div>

  
    <div className="col-10">
      <div className="card border-secondary mb-3" style={{width: "100%"}}>
        <div className="card-header" style={{ fontFamily: props.font }}>
        {props.font}
        </div>
        <div className="card-body">
          <p className={`card-text ${props.font.toLowerCase()} `} style={{ fontFamily: props.font }}>{ props.inputText }</p>
          <a href={ props.url } className="btn btn-secondary"> This Font</a>
        </div>
      </div>
    </div>
  
);

Card.propTypes = {
  font: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Card;