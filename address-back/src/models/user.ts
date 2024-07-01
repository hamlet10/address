import mongoose from "mongoose";

const url = "mongodb://root:example@localhost:27017/"
const connectionOptions = {
  dbName: "myAddress"
}

mongoose.set('strictQuery', false)
mongoose.connect(url, connectionOptions)
  .then(result => {
    console.log('connected to MongoDB')
  }).catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

export interface IUser extends mongoose.Document {
  ID?: string;
  name: String;
  lastName?: String;
  dateOfBirth: Date;
  sex?: Boolean;
};

export const UserSchema = new mongoose.Schema({
  ID: { type: String, required: false },
  name: { type: String, required: "please enter Last name" },
  lastName: { type: String, required: false },
  dateOfBirth: { type: Date, required: "please enter Date of Birth" },
  sex: { type: Boolean, required: false },
  
});


UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const User = mongoose.model<IUser>('User', UserSchema);
export default User