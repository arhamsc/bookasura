import User from '../../../models/api/user/user_model';
import { sign } from 'jsonwebtoken';
import dbConnect from '../../../db/dbConnect';
import errorHandler from '../../../helpers/api/error_handler';
import { hash } from 'bcrypt';


const expiryTime = 86400000;

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;
  switch (method) {
    case 'POST': {
      try {
        const { password, email, name } = req.body;
        const newUser = new User({ name, email });
        const token = sign(newUser.toJSON(), process.env.TOKEN_SECRET, {
          expiresIn: '1d',
        });
       newUser.password = await hash(password, 12);
        newUser.token = token;
        await newUser.save();
        console.log(newUser);
        res.status(200).send({ url: '/', token, expiryTime });
      } catch (error) {
        errorHandler(res, error.message);
      }
    }
  }
};

export default handler;
