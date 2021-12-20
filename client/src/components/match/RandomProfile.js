import React, { useState } from "react";
import "../match/NewMatch.css";
import SideBar from "../layout/SideBar";
import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import RandomItem from "./RandomItem";
import { Container, Row, Col } from "reactstrap";

const RandomProfile = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  
  var rand = Math.floor(Math.random() * (profiles.length - 0 + 1) + 0);
  return (
    <div>
      <SideBar />
      <div>
      {loading ? (
            <Spinner />
          ) : (
            <div>
            {profiles.length > 0 ? (

               <RandomItem key={profiles[rand]._id} profile={profiles[rand]} />

            ) : (
              <h4>No profiles found...</h4>
            )}
            </div>
          )}
      </div>
      <button className="new-btn" onClick={() =>  window.location.reload(false)}>New Person</button>
    </div>
  );
};
RandomProfile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(RandomProfile);