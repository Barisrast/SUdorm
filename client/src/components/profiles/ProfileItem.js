import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {Row,Col,Container} from "reactstrap";

const ProfileItem = ({
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

  console.log('pref', gender,spiritAnimal,socialSpectrum,smokerBool)
  return (
    <Container className="profile bg-light">
      <Row>
        <Col xs={3}>
          <img src={avatar} alt="" className="round-img" />
        </Col>
        <Col xs={6}>
          PREFERENCES
          <h3 style={{ color: "tomato" }}>{name}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ul>
              <li>Sleep Routine: {sleepRoutine}</li>
              <li>Spirit Animal : {spiritAnimal}</li>
              <li>Social Spectrum: {socialSpectrum}</li>
              <li>Hobies: {hobies}</li>
              <li>Smoker: {smokerBool}</li>
              <li>Gender: {gender}</li>
              <li>Tidiness: {tidiness}</li>
            </ul>
          </div>
        </Col>
        <Col xs={3}>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>
          </div>
        </Col>
      </Row>
    </Container>
    //  <div className="profile bg-light">

    //    <div>
    //      <h2>{name}</h2>
    //      <p>{spiritAnimal}</p>
    //      <p className="my-1">{gender && <span>{gender}</span>}</p>
    //      <Link to={`/profile/${_id}`} className="btn btn-primary">
    //        View Profile
    //      </Link>
    //    </div>
    //    <ul>
    //      <p>{tidiness}</p>
    //      <p>{sleepRoutine}</p>
    //    </ul>
    //  </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
