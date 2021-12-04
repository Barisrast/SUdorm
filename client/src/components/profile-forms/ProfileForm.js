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
  skills: "",
  githubusername: "",
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

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

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
      for (const key in profile.preferences) {
        if (key in profileData) profileData[key] = profile.preferences[key];
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
          <form>
            <div className="innerForm-container">
              <div className="gender-container">
                <label>Gender:</label>
                <div className="genderRadio-container">
                  <input
                    type="radio"
                    name="gender-radio"
                    id="male"
                    value="male"
                  ></input>
                  <span>Male</span>
                  <input
                    type="radio"
                    name="gender-radio"
                    id="female"
                    value="female"
                  ></input>
                  <span>Female</span>
                  <input
                    type="radio"
                    name="gender-radio"
                    id="other"
                    value="other"
                  ></input>
                  <span>Other</span>
                </div>
              </div>
              <hr></hr>
              <div className="major-container">
                <label>Major:</label>
                <input type="text" className="major"></input>
              </div>
              <hr></hr>
              <div className="classYear-container">
                <label>Class Year:</label>
                <input type="number" className="classYear"></input>
              </div>
              <hr></hr>
              <div className="bio-container">
                <label>Bio:</label>
                <textarea className="bio"></textarea>
              </div>
              <hr></hr>
              <div className="smoker-container">
                <label>Smoker:</label>
                <input
                  type="radio"
                  name="smoker-radio"
                  id="smoker-true"
                  value="True"
                ></input>
                <span>True</span>
                <input
                  type="radio"
                  name="smoker-radio"
                  id="smoker-false"
                  value="False"
                ></input>
                <span>False</span>
              </div>
              <hr></hr>
              <div className="sleepRoutine-container">
                <label>Sleep Routine</label>
                <input type="text" className="sleepRoutine"></input>
              </div>
              <hr></hr>
              <div className="tidiness-container">
                <label>Tidiness:</label>
                <input type="radio" name="tidiness-radio" id="tidy"></input>
                <span>Tidy</span>
                <input type="radio" name="tidiness-radio" id="normal"></input>
                <span>Normal</span>
                <input type="radio" name="tidiness-radio" id="messy"></input>
                <span>Messy</span>
              </div>
              <hr></hr>
              <div className="noiseTolerance-container">
                <label>Noise Tolerance:</label>
                <input
                  type="radio"
                  name="noiseTolerance-radio"
                  id="high-tolerance"
                  value="High"
                ></input>
                <span>High</span>
                <input
                  type="radio"
                  name="noiseTolerance-radio"
                  id="normal-tolerance"
                  value="Normal"
                ></input>
                <span>Normal</span>
                <input
                  type="radio"
                  name="noiseTolerance-radio"
                  id="low-tolerance"
                  value="Low"
                ></input>
                <span>Low</span>
              </div>
              <hr></hr>
              <div className="hobbies-container">
                <label>Hobbies</label>
                <input type="text" className="hobbies"></input>
              </div>
              <hr></hr>
              <div className="preferences-container">
                <label>Additional Preferences</label>
                <input type="text" className="preferences"></input>
              </div>
              <hr></hr>
              <div className="headphones-container">
                <label>Do You Wear Headphones While consuming media?</label>
                <input
                  type="radio"
                  name="Headphones-radio"
                  id="Headphones-yes"
                  value="Yes"
                ></input>
                <span>Yes</span>
                <input
                  type="radio"
                  name="Headphones-radio"
                  id="Headphones-no"
                  value="No"
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
                ></input>
                <span>Yes</span>
                <input
                  type="radio"
                  name="roommate-radio"
                  id="roommate-false"
                  value="No"
                ></input>
                <span>No</span>
              </div>
              <hr></hr>
              <div className="socailMedia-container">
                <div className="instagram">
                  <label>Instagram</label>
                  <input type="text" id="instagram"></input>
                </div>

                <div className="facebook">
                  <label>Facebook</label>
                  <input type="text" id="Facebook"></input>
                </div>
                <div className="twitter">
                  <label>Twitter</label>
                  <input type="text" id="Twitter"></input>
                </div>
                <div className="youtube">
                  <label>Youtube</label>
                  <input type="text" id="Youtube"></input>
                </div>
                <div className="linkedin">
                  <label>LinkedIn</label>
                  <input type="text" id="LinkedIn"></input>
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
