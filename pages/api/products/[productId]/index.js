import dbConnect from '../../../../db/dbConnect';
import errorHandler from '../../../../helpers/api/error_handler';
import Product from '../../../../models/api/product/product_model';
import Category from '../../../../models/api/product/category';
import Inventory from '../../../../models/api/product/inventory';

const handler = async (req, res) => {
  const { method } = req;
  const { productId } = req.query;
  if (!productId) {
    return errorHandler(res, 'Item Not Found', 404);
  }
  await dbConnect();
  switch (method) {
    case 'GET': {
      try {
        const product = await Product.findById(productId)
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
        if (!product) {
          return errorHandler(res, 'Product Not Found', 404);
        }
        return res.json(product);
      } catch (error) {
        return errorHandler(res, error.message, 400);
      }
    }
    default: {
      return errorHandler(res, 'Something Went Wrong');
    }
  }
};

export default handler;
