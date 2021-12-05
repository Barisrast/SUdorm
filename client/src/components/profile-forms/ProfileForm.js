import React, { Fragment, useState, useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import "./ProfileForm.css";
import SideBar from "../layout/SideBar";

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect
  we can then safely use this to construct our profileData
 */
const initialState = {
  gender: "",
  major: "",
  classYear: "",
  bio: "",
  sleepRoutine: "",
  socialSpectrum: "",
  tidiness: "",
  noiseTolerance: "",
  hobbies: "",
  spiritAnimal: "",
  additionalPreferences: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch("/create-profile");

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    gender,
    major,
    classYear,
    bio,
    sleepRoutine,
    socialSpectrum,
    tidiness,
    noiseTolerance,
    hobbies,
    spiritAnimal,
    additionalPreferences,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };
  return (
    <div>
      <SideBar />
      <div className="matchForm">
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>
            <div className="innerForm-container">
              <div className="gender-container">
                <label>Gender:</label>
                <div className="genderRadio-container">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={onChange}
                  ></input>
                  <span>Male</span>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={onChange}
                  ></input>
                  <span>Female</span>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={onChange}
                  ></input>
                  <span>Other</span>
                </div>
              </div>
              <hr></hr>
              <div className="major-container">
                <label>Major:</label>
                <input
                  type="text"
                  name="major"
                  value={major}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="classYear-container">
                <label>Class Year:</label>
                <input
                  type="text"
                  name="classYear"
                  value={classYear}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="bio-container">
                <label>Bio:</label>
                <input
                  type="text"
                  name="bio"
                  value={bio}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="smoker-container">
                <label>Smoker:</label>
                <input
                  type="radio"
                  name="smoker-radio"
                  id="smoker-true"
                  value="True"
                  onChange={onChange}
                ></input>
                <span>True</span>
                <input
                  type="radio"
                  name="smoker-radio"
                  id="smoker-false"
                  value="False"
                  onChange={onChange}
                ></input>
                <span>False</span>
              </div>
              <hr></hr>
              <div className="sleepRoutine-container">
                <label>Sleep Routine</label>
                <input
                  type="text"
                  name="sleepRoutine"
                  value={sleepRoutine}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="tidiness-container">
                <label>Tidiness:</label>
                <input
                  type="radio"
                  name="tidiness"
                  value="tidy"
                  onChange={onChange}
                ></input>
                <span>Tidy</span>
                <input
                  type="radio"
                  name="tidiness"
                  value="normal"
                  onChange={onChange}
                ></input>
                <span>Normal</span>
                <input
                  type="radio"
                  name="tidiness"
                  value="messy"
                  onChange={onChange}
                ></input>
                <span>Messy</span>
              </div>
              <hr></hr>
              <div className="noiseTolerance-container">
                <label>Noise Tolerance:</label>
                <input
                  type="radio"
                  name="noiseTolerance"
                  id="high-tolerance"
                  value="High"
                  onChange={onChange}
                ></input>
                <span>High</span>
                <input
                  type="radio"
                  name="noiseTolerance"
                  value="Normal"
                  onChange={onChange}
                ></input>
                <span>Normal</span>
                <input
                  type="radio"
                  name="noiseTolerance"
                  value="Low"
                  onChange={onChange}
                ></input>
                <span>Low</span>
              </div>
              <hr></hr>
              <div className="hobbies-container">
                <label>Hobbies</label>
                <input
                  type="text"
                  name="hobbies"
                  value={hobbies}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="preferences-container">
                <label>Additional Preferences</label>
                <input
                  type="text"
                  name="additionalPreferences"
                  value={additionalPreferences}
                  onChange={onChange}
                ></input>
              </div>
              <hr></hr>
              <div className="headphones-container">
                <label>Do You Wear Headphones While consuming media?</label>
                <input
                  type="radio"
                  name="Headphones-radio"
                  id="Headphones-yes"
                  value="Yes"
                  onChange={onChange}
                ></input>
                <span>Yes</span>
                <input
                  type="radio"
                  name="Headphones-radio"
                  id="Headphones-no"
                  value="No"
                  onChange={onChange}
                ></input>
                <span>No</span>
              </div>
              <hr></hr>
              <div className="roommate-container">
                <label>Searching Roommate</label>
                <input
                  type="radio"
                  name="roommate-radio"
                  id="roommate-true"
                  value="Yes"
                  onChange={onChange}
                ></input>
                <span>Yes</span>
                <input
                  type="radio"
                  name="roommate-radio"
                  id="roommate-false"
                  value="No"
                  onChange={onChange}
                ></input>
                <span>No</span>
              </div>
              <hr></hr>
              <div className="socialMedia-container">
                <div className="InstagramDiv">
                  <label>Instagram</label>
                  <input
                    type="text"
                    name="instagram"
                    value={instagram}
                    onChange={onChange}
                  ></input>
                </div>

                <div className="FacebookDiv">
                  <label>Facebook</label>
                  <input
                    type="text"
                    name="facebook"
                    value={facebook}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="TwitterDiv">
                  <label>Twitter</label>
                  <input
                    type="text"
                    name="twitter"
                    value={twitter}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="YoutubeDiv">
                  <label>Youtube</label>
                  <input
                    type="text"
                    name="youtube"
                    value={youtube}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="LinkedinDiv">
                  <label>LinkedIn</label>
                  <input
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    onChange={onChange}
                  ></input>
                </div>
              </div>
              <hr></hr>
              <button type="submit" className="save-btn" value="Save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
