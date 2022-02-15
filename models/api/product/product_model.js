import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  price: {
    type: Number,
    min: 10,
    required: [true, 'Price is required'],
  },
  imageUrl: String,
  imageFileName: String,
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory',
  },
  createdAt: Date,
  modifiedAt: Date,
  deletedAt: Date,
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
