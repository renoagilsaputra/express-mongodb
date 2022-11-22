const Product = require("./model/Product");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length < 1) {
      return res.status(404).json({
        data: [],
        statusCode: 404,
      });
    }
    return res.status(200).json({
      data: product,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
};

const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json({
      data: product,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
};

const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    product.save();
    return res.status(200).json({
      message: "success",
      data: product,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    checkID = await Product.findById(id);
    if (!checkID) {
      return res.status(404).json({
        message: "Data not found",
        statusCode: 404,
      });
    }

    await Product.deleteOne({ _id: id });

    return res.status(200).json({
      message: "success",
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    checkID = await Product.findById(id);
    if (!checkID) {
      return res.status(404).json({
        message: "Data not found",
        statusCode: 404,
      });
    }

    await Product.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      }
    );

    return res.status(200).json({
      message: "success",
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
};

module.exports = {
  getProduct,
  getProductByID,
  saveProduct,
  deleteProduct,
  updateProduct,
};
