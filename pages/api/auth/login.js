import User from '../../../models/api/user/user_model';
import { sign } from 'jsonwebtoken';
import dbConnect from '../../../db/dbConnect';
import errorHandler from '../../../helpers/api/error_handler';
import { compare } from 'bcrypt';

const expiryTime = 86400000;

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;
  switch (method) {
    case 'POST': {
      try {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return errorHandler(res, 'No User Found', 404);
        const isValid = await compare(password, user.password);
        if (!isValid) {
          return errorHandler(res, 'Incorrect Username or Password', 401);
        }
        const jwtBody = {
          name: user.name,
          email: user.email,
        };
        const token = sign(jwtBody, process.env.TOKEN_SECRET, {
          expiresIn: '1d',
        });
        user.token = token;
        await user.save();
        res.status(200).send({
          url: '/',
          token,
          expiryTime,
          name: user.name,
          email: user.email,
          role: user.role,
        });
      } catch (error) {
        errorHandler(res, error.message);
      }
    }
  }
};

export default handler;
