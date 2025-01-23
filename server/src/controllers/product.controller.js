import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
import { Review } from "../models/review.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProduct = asyncHandler(async (req, res) => {
  const Admin = req.body.Admin;
  if (Admin) {
    const { Title, CoverImage, Description, Pdf, Audio, Tags } = req.body;

    if (
      [Title, CoverImage, Description, Pdf, Tags].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const existedProduct = await Product.findOne({
      Title: Title,
    });

    if (existedProduct) {
      throw new ApiError(409, "Product with same title already exists");
    }

    const product = await Product.create({
      Title: Title,
      CoverImage: CoverImage,
      Description: Description,
      Pdf: Pdf,
      Audio: Audio,
      Tags: Tags,
    });

    const createdProduct = await Product.findById(product._id);
    if (!createdProduct) {
      throw new ApiError(500, "product was not created ");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdProduct, "Product created successfully"));
  } else {
    throw new ApiError(
      401,
      "Unauthorized request!, only admin can create product"
    );
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const Admin = req.body.Admin;
  if (Admin) {
    const { Title, CoverImage, Description, Pdf, Audio, Tags, productId } =
      req.body;

    if (!Title || !CoverImage || !Description || !Pdf || !Tags) {
      throw new ApiError(400, "All fields are required ");
    }

    const product = await Product.findOne({
      _id: productId,
    });

    if (!product) {
      throw new ApiError(404, "existing Product not found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      {
        $set: {
          Title: Title,
          CoverImage: CoverImage,
          Description: Description,
          Pdf: Pdf,
          Audio: Audio,
          Tags: Tags,
        },
      },
      { new: true }
    );

    if (!updatedProduct) {
      throw new ApiError(500, "Error while updating the product ");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedProduct, "Product updated successfully")
      );
  } else {
    throw new ApiError(
      401,
      "Unauthorized request!, only admin can update product"
    );
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const id = req.body.id;

  if (!id) {
    throw new ApiError(400, "id is required");
  }
  const product = await Product.findOne({
    _id: id,
  });

  const avgstar = await Review.aggregate([
    {
      $match: { ProductId: product._id.toString() },
    },
    {
      $group: {
        _id: "$ProductId",
        averageStar: { $avg: "$Star" },
      },
    },
  ]);
  
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { product, avgstar: avgstar[0]?.averageStar||0 },
        "Product fetched successfully"
      )
    );
});

const getProducts = asyncHandler(async (req, res) => {
  const Title = req.body.Titles;
  function parseTitles(input) {
    return (
      input
        .match(/"([^"]+)"/g)
        ?.map((Title) => Title.replace(/"/g, "").trim()) || []
    );
  }

  const Titles = parseTitles(Title);
  if (!Titles) {
    throw new ApiError(400, "Title is required");
  }

  const products = await Product.find({
    Title: { $in: Titles },
  });

  if (!products) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
});

const getProductsWithId = asyncHandler(async (req, res) => {
  const ids = req.body.ids;
  if (!ids) {
    throw new ApiError(400, "id is required");
  }
  function parseid(input) {
    return (
      input
        .match(/"([^"]+)"/g)
        ?.map((id) => id.replace(/"/g, "").trim()) || []
    );
  }

  const id = parseid(ids);

  const products = await Product.find({
    _id: { $in: id },
  });

  if (!products) {
    throw new ApiError(404, "Product by id not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products by ids fetched successfully"));
});

const searchSuggestion = asyncHandler(async (req, res) => {
  const query = req.body.query;

  if (!query) {
    throw new ApiError(400, "Query is required");
  }
  const products = await Product.aggregate([
    {
      $search: {
        compound: {
          should: [
            {
              phrase: {
                query: query,
                path: "Title",
                slop: 10,
                score: { boost: { value: 5 } },
              },
            },
            {
              phrase: {
                query: query,
                path: ["Tags", "Description"],
                slop: 4,
              },
            },
          ],
        },
      },
    },
    {
      $limit: 3,
    },
  ]);

  res
    .status(200)
    .json(new ApiResponse(200, products, "suggestion fetched successfully"));
});

const searchPage = asyncHandler(async (req, res) => {
  const query = req.body.query;
  if (!query) {
    throw new ApiError(400, "Query is required"); //FRONTEND dont call this if field empty
  }

  const products = await Product.aggregate([
    {
      $search: {
        compound: {
          should: [
            {
              phrase: {
                query: query,
                path: "Title",
                slop: 4,
                score: { boost: { value: 5 } },
              },
            },
            {
              phrase: {
                query: query,
                path: ["Tags", "Description"],
                slop: 4,
              },
            },
          ],
        },
      },
    },
    {
      $sort: { score: { $meta: "textScore" } },
    },
  ]);

  res
    .status(200)
    .json(new ApiResponse(200, products, "Query fetched successfully"));
});



export {
  createProduct,
  updateProduct,
  getProduct,
  getProducts,
  searchSuggestion,
  searchPage,
  getProductsWithId
};
