import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-3 my-3">
            <div className="card h-100" style={{height:"620px"}}>
                <img src={props.imageUrl} class="card-img-top mt-3 rounded" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.buttonUrl} className="btn btn-info mt-auto">{props.buttonLabel}</a>
                </div>
            </div>
        </div>)
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Card;

