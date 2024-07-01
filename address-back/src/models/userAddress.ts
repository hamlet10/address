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

export interface IUserAddress extends mongoose.Document {
    ID_CONTROL: number;
    Calle: String;
    No: number;
    UserID: String;
};

export const UserAddressSchema = new mongoose.Schema({
    ID_CONTROL: { type: Number, required: true },
    Calle: { type: String, required: true },
    No: { type: Number, required: true },
    UserID: { type: String, required: true },

});

const UserAddress = mongoose.model<IUserAddress>('user_address', UserAddressSchema);
export default UserAddress



