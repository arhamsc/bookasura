import dbConnect from '../../../db/dbConnect';
import Product from '../../../models/api/product/product_model';
import Category from '../../../models/api/product/category';
import Inventory from '../../../models/api/product/inventory';

import errorHandler from '../../../helpers/api/error_handler';

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();
  if (method === 'GET') {
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
      const totalQuantity = products.length;
      return res.json({ products, totalQuantity });
    } catch (error) {
      return errorHandler(res, error.message, 400);
    }
  } else if (method === 'POST') {
    try {
      const { name, description, price, imageUrl, category, inventory } =
        req.body.product;
      const newProduct = new Product({
        name,
        description,
        price,
        imageUrl,
        createdAt: +new Date(),
      });
      const cat = await Category.findOne({ name: category });
      if (!cat) return errorHandler(res, 'Category Not Found', 404);
      newProduct.category = cat._id;
      const inven = new Inventory({
        productId: newProduct._id,
        quantity: inventory,
        createdOn: +new Date(),
      });
      newProduct.inventory = inven._id;
      await inven.save();
      await newProduct.save();
      return res
        .status(200)
        .json({ message: 'Created the page', id: newProduct._id });
    } catch (error) {
      return errorHandler(res, 'Something went wrong');
    }
  } else {
    return errorHandler(res, 'Something Went Wrong');
  }
};

export default handler;
