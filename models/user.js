import mongoose from "mongoose";
import passportLocal from "passport-local-mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(passportLocal);

export const User = mongoose.model("User", userSchema);
