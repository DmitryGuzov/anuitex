//Vendors
import { Document, model, Schema } from "mongoose";
import {Auth} from '../interface/auth.interface'

const authSchema = new Schema<Auth>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  }
});

interface AuthSchemaEntityModel extends Auth, Document {}

export default model<AuthSchemaEntityModel>("Users", authSchema);
