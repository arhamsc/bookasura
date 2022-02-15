import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is Required'],
  },
  createdOn: Date,
});

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
