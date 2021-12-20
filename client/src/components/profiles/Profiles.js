import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import SideBar from "../layout/SideBar";
import { Container, Row, Col } from "reactstrap";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          {loading ? (
            <Spinner />
          ) : (
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Row
                style={{
                  fontFamily: "cursive",
                  color: "maroon",
                  fontSize: "x-large",
                }}
              >
                Roommates
              </Row>
              <Row style={{ fontFamily: "monospace" }}>
                Browse and connect with roommates.
              </Row>
              <Row>
                {profiles.length > 0 ? (
                  profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4>No profiles found...</h4>
                )}
              </Row>
            </Container>
            // <Fragment>
            //   <h1 className="large text-primary">Developers</h1>
            //   <p className="lead">
            //     <i className="fab fa-connectdevelop" /> Browse and connect with
            //     developers
            //   </p>
            //   <div className="profiles">
            //     {profiles.length > 0 ? (
            //       profiles.map((profile) =>  {
            //         <ProfileItem key={profile._id} profile={profile} />

            //       })
            //     ) : (
            //       <h4>No profiles found...</h4>
            //     )}
            //   </div>
            // </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
