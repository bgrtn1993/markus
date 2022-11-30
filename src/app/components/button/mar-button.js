import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './mar-button.css'

const MarButton =({text,onClick,state})=> {
    return (
        <button className={"mar-button "+state } onClick={onClick}>{text}</button>
    );
}

MarButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    state:PropTypes.string,
}

MarButton.defaultProps = {
    text:"Tıkla",
    state:"Dark"
}
export default MarButton;