const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  gender: {
    type: String,
  },
  major: {
    type: String,
  },
  classYear: {
    type: String,
  },
  bio: {
    type: String,
  },
  smokerBool: {
    type: String,
  },
  sleepRoutine: {
    type: String,
  },
  socialSpectrum: {
    type: String,
  },
  tidiness: {
    type: String,
  },
  noiseTolerance: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  wearHeadphonesBool: {
    type: String,
  },
  spiritAnimal: {
    type: String,
  },
  additionalPreferences: {
    type: String,
  },
  searchingRoommate: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
