import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {Row,Col,Container} from "reactstrap";
import "./NewMatch.css";

const RandomItem = ({
  profile: {
    user: { _id, name, avatar },
    spiritAnimal,
    gender,
    tidiness,
    sleepRoutine,
    socialSpectrum,
    hobies,
    smokerBool
  },
}) => {
    return(
        <div className="card">
          <img src={avatar} style={{ width: "100%" }} />
          <h1>{name}</h1>
          <p className="title"></p>
          <p></p>
          <p>
            <button className="contact-btn">Contact</button>
          </p>
        </div>

    );
};

RandomItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default RandomItem;