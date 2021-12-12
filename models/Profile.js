const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
    type: Boolean,
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
    type: Boolean,
  },
  spiritAnimal: {
    type: String,
  },
  additionalPreferences: {
    type: String,
  },
  searchingRoommate: {
    type: Boolean,
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
  // we might include reviews section if we choose to implement ex-roommate reviews
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
