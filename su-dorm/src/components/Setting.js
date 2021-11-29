import React from 'react'
import "./Setting.css"

export default function Setting() {
    return (
        <div className="settings-container">
            <div className="settings">
                <h2>Settings</h2>
                <div className="picture-setting">
                    <label>Profile picture:</label>
                    <input type="file"></input>
                </div>
            </div>
        </div>
    )
}
