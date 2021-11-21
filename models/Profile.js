const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  major: {
    type: String,
  },
  class: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  preferences: [
    {
      smokerBool: {
        type: Boolean,
        required: true,
      },
      sleepRoutine: {
        type: String,
        required: true,
      },
      socialSpectrum: {
        type: String,
      },
      tidiness: {
        type: String,
        required: true,
      },
      noiseTolerance: {
        type: String,
        required: true,
      },
      hobbies: {
        type: String,
        required: true,
      },
      wearHeadphonesBool: {
        type: Boolean,
        required: true,
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
    },
  ],
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
