import mongoose, { Document, Schema } from "mongoose";
interface IUser extends Document {
  firstname: string;
  lastname: string;
  age: string;
  work: string;
}

const userSchema: Schema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    work: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userDataModal = mongoose.model<IUser>("userdata", userSchema);
