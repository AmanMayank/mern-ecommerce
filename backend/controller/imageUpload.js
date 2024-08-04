const productImageModel = require("../models/productImageModel");

async function imageUploadController(req, res) {
  try {
    const name = req.body.name;

    const imageCheck = await productImageModel.findOne({ name });

    console.log("imageCheck===", imageCheck);

    if (imageCheck) {
      throw new Error("Image already exists in the database!!");
    }

    if (!name) {
      throw new Error("Kindly specify a image URL!");
    }

    const uploadData = new productImageModel({ ...req.body });
    const saveImage = await uploadData.save();

    res.status(201).json({
      data: saveImage,
      success: true,
      error: false,
      message: "Image uploaded successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = imageUploadController;
