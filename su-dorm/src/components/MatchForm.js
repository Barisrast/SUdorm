import React from 'react'
import './MatchForm.css';

export default function MatchForm() {
    return (
        <div className="matchForm">
            <div className="form-container" >
                <form>
                    <div className="innerForm-container">
                        <div className="gender-container">
                            <label>Gender:</label>
                            <div className="genderRadio-container">
                            <input type="radio" name="gender-radio" id="male" value="male"></input>
                            <span>Male</span>
                            <input type="radio" name="gender-radio" id="female" value="female"></input>
                            <span>Female</span>
                            <input type="radio" name="gender-radio" id="other" value="other"></input>
                            <span>Other</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="major-container">
                            <label>Major:</label>
                            <input type="text" className="major" ></input>
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
                            <input type="radio" name="smoker-radio" id="smoker-true" value="True" ></input>
                            <span>True</span>
                            <input type="radio" name="smoker-radio" id="smoker-false" value="False"></input>
                            <span>False</span>
                        </div>
                        <hr></hr>
                        <div className="sleepRoutine-container">
                            <label>Sleep Routine</label>
                            <input type="text" className="sleepRoutine" ></input>
                        </div>
                        <hr></hr>
                        <div className="tidiness-container">
                            <label>Tidiness:</label>
                            <input type="radio" name="tidiness-radio" id="tidy" ></input>
                            <span>Tidy</span>
                            <input type="radio" name="tidiness-radio" id="normal"></input>
                            <span>Normal</span>
                            <input type="radio" name="tidiness-radio" id="messy"></input>
                            <span>Messy</span>
                        </div>
                        <hr></hr>
                        <div className="noiseTolerance-container">
                            <label>Noise Tolerance:</label>
                            <input type="radio" name="noiseTolerance-radio" id="high-tolerance" value="High"></input>
                            <span>High</span>
                            <input type="radio" name="noiseTolerance-radio" id="normal-tolerance" value="Normal"></input>
                            <span>Normal</span>
                            <input type="radio" name="noiseTolerance-radio" id="low-tolerance" value="Low"></input>
                            <span>Low</span>
                        </div>
                        <hr></hr>
                        <div className="hobbies-container">
                            <label>Hobbies</label>
                            <input type="text" className="hobbies" ></input>
                        </div>
                        <hr></hr>
                        <div className="preferences-container">
                            <label>Additional Preferences</label>
                            <input type="text" className="preferences" ></input>
                        </div>
                        <hr></hr>
                        <div className="headphones-container">
                            <label>Wear Headphones:</label>
                            <input type="radio" name="Headphones-radio" id="Headphones-yes" value="Yes"></input>
                            <span>Yes</span>
                            <input type="radio" name="Headphones-radio" id="Headphones-no" value="No"></input>
                            <span>No</span>
                        </div>
                        <hr></hr>
                        <div className="roommate-container">
                            <label>Searching Roommate:</label>
                            <input type="radio" name="roommate-radio" id="roommate-true" value="Yes"></input>
                            <span>Yes</span>
                            <input type="radio" name="roommate-radio" id="roommate-false" value="No"></input>
                            <span>No</span>
                        </div>
                        <hr></hr>
                        <div className="socailMedia-container">
                            <div className="instagram">
                                <label>Instagram</label>
                                <input type="text" id="instagram" ></input>
                            </div>
                            
                            <div className="facebook">
                                <label>Facebook</label>
                                <input type="text" id="Facebook" ></input>
                            </div>
                            <div className="twitter">
                                <label>Twitter</label>
                                <input type="text" id="Twitter" ></input>
                            </div>
                            <div className="youtube">
                                <label>Youtube</label>
                                <input type="text" id="Youtube" ></input>
                            </div>
                            <div className="linkedin">
                                <label>LinkedIn</label>
                                <input type="text" id="LinkedIn" ></input>
                            </div>
                        </div>
                        <hr></hr>
                        <button type="submit" className="save-btn" value="Save" >Save</button>
                        
                    </div>
                </form>

            </div>
        </div>
    )
}
