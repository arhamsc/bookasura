const Book = class {
  constructor(_id, name, price, description, category, imageUrl, inventory) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.imageUrl = imageUrl;
    this.inventory = inventory;
  }

   getBook() {
    return {
      _id: this._id,
      name: this.name,
      price: this.price,
      description: this.description,
      category: this.category,
      imageUrl: this.imageUrl,
      inventory: this.inventory,
    };
  }
};

export default Book;
