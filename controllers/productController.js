const Product = require("../models/Product");

const isValidID = (id) => {
  if (!id || id.length < 20 || id.length > 25) {
    return null;
  }
  let patt = new RegExp(/[a-z0-9]+/g);
  if (!patt.test(id)) {
    return null
  }
  return id;
}

const formatToSave = ({ name, category, location, price }) => {
  return {
    name,
    category,
    location,
    price,
  }
}

const createProduct = async (req, res) => {
  try {
    let product;
    //creating new product
    const { name, category, location, price } = req.body;
    if (name || category || location || price) {
      product = await new Product(formatToSave({ name, category, location, price }));
      await product.save();
      return res.send(product);
    }
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

const getProducts = async (req, res) => {
  try {
    let allproducts;
    //getting all products
    allproducts = await Product.find();
    res.json(allproducts);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, category, location, price } = req.body;
    let id = req.params.id
    let product = await Product.findById(isValidID(id));
    if (!product) {
      return res.status(404).json({ msg: "the product not exist" });
    }
    product = await Product.findOneAndUpdate(
      { _id: id },
      formatToSave({ name, category, location, price }), {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

const getProduct = async (req, res) => {
  try {
    let id = req.params.id
    let product = await Product.findById(isValidID(id));
    if (!product) {
      return res.status(404).json({ msg: "the product not exist" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(isValidID(id));
    if (!product) {
      return res.status(404).json({ msg: "the product not exist" });
    }
    await Product.findOneAndRemove({ _id: id });
    res.json({ msg: 'Product deleted' })

  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }

}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  getProduct,
  deleteProduct
};
