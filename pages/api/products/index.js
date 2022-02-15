import dbConnect from '../../../db/dbConnect';
import Product from '../../../models/api/product/product_model';
import Category from '../../../models/api/product/category';
import Inventory from '../../../models/api/product/inventory';

import errorHandler from '../../../helpers/api/error_handler';

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case 'GET': {
      try {
        const products = await Product.find({})
          .populate({
            path: 'category',
            model: Category,
            select: { _id: 1, name: 1 },
          })
          .populate({
            path: 'inventory',
            model: Inventory,
            select: { _id: 1, quantity: 1 },
          });
        if (!products) {
          return errorHandler(res, 'No Products Found', 404);
        }
        return res.json(products);
      } catch (error) {
        return errorHandler(res, error.message, 400);
      }
    }
    default: {
      return errorHandler('Something Went Wrong');
    }
  }
};

export default handler;
