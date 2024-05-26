const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryDeleted,
  sendCategoryUpdate,
} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
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
categoriesRouter.post("/categories", checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
categoriesRouter.put("/categories/:id", checkAuth, findCategoryById, updateCategory, sendCategoryUpdate);

module.exports = categoriesRouter;
