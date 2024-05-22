const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryDeleted,
  sendCategoryUpdate,
} = require("../controllers/categories");
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", createCategory, sendCategoryCreated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
categoriesRouter.put("/categories/:id", findCategoryById, updateCategory, sendCategoryUpdate);

module.exports = categoriesRouter;
