import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Address from "./models/address";
import UserAddress from "./models/userAddress";
import User from "./models/user";
import  cors  from "cors";
import { ObjectId } from "mongodb";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options))
app.use(express.json())
app.get("/api/address", async (req: Request, res: Response) => {
  const address = await Address.find({})
  return res.json({
    data: address,
    statusCode: 200
  })
});

app.get("/api/address/:UserID", async (req: Request, res: Response) => {
  const userAddress = await UserAddress.find({'UserID' : req.params.UserID})
  return res.json({
    data: userAddress,
    statusCode: 200
  })
});

app.get("/api/users", async (req: Request, res: Response) => {
  const users = await User.find({});
  return res.json({
    data: users,
    statusCode: 200
  })
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const idParam = req.params.id;
  const ObjId = new ObjectId(`${idParam}`)
  const userById = await User.find({'_id':  ObjId});
  return res.json({
    data: userById,
    statusCode: 200
  })
});



app.post("/api/createuser", async (req: Request, res: Response) => {

  try {
    // const {ID, name, lastName, dateOfBirth, sex} = req.body
     const nuUser = await User.create(req.body);
    return res.json({
      data: nuUser,
      statusCode: 201
    })
  } catch (error: any) {
    res.json({
      estatusCode: 500,
      message: error.message
    })
  }

})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
