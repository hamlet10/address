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

export interface IMaster_Address extends mongoose.Document {
  ID: number;
  DESCRIPSION: String;
  ID_CONTROL?: number;
  ID_NIVEL: number;
};

export const AddressSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  DESCRIPSION: { type: String, required: true },
  ID_CONTROL: { type: Number, required: false },
  ID_NIVEL: { type: Number, required: true },

});

const Address = mongoose.model<IMaster_Address>('Master_Address', AddressSchema);
export default Address



