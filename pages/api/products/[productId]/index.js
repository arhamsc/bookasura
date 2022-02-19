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
  if (method === 'GET') {
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
  } else if (method === 'PUT') {
    try {
      const { name, description, price, imageUrl, category, inventory } =
        req.body.product;
      const product = await Product.findByIdAndUpdate(
        productId,
        {
          name,
          description,
          price,
          imageUrl,
        },
        { new: true },
      );
       await Inventory.findByIdAndUpdate(
        product.inventory,
        {
          quantity: inventory,
        },
        { new: true },
      );
      const cat = await Category.findOne({ name: category });
      product.category = cat._id;
      await product.save();
      return res.json({ id: product._id });
    } catch (error) {
      return errorHandler(res, 'Something Went Wrong');
    }
  } else if (method === 'DELETE') {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      await Inventory.findByIdAndDelete(deletedProduct.inventory);
      return res.json({ message: 'deleted' });
    } catch (_) {
      return errorHandler(res, 'Something went wrong');
    }
  } else {
    return errorHandler(res, 'Something Went Wrong');
  }
};

export default handler;
