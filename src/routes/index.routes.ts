import { Application } from "express";
import {
  berandaPage,
  belanjaPage,
  deskripsiPage,
  checkoutPage,
  kontakPage,
  keranjangPage,
  productDetailPage,
  adminDashboardPage,
  adminProductPage,
  adminLoginPage,
  loginAdmin,
  logoutAdmin,
  addProduct,
  multerUpload,
  deleteProduct,
  updateProduct,
  adminProductDetail,
} from "../controllers/index.controllers.js";
import {
  isAuthenticated,
  redirectIfAuthenticated,
} from "../middlewares/auth.middleware.js";

export const routes = (app: Application) => {
  app.get("/", berandaPage);
  app.get("/belanja", belanjaPage);
  app.get("/deskripsi", deskripsiPage);
  app.get("/checkout", checkoutPage);
  app.get("/kontak", kontakPage);
  app.get("/keranjang", keranjangPage);
  app.get("/produk/:id", productDetailPage);

  app.get("/admin/login", redirectIfAuthenticated, adminLoginPage);
  app.get("/admin/dashboard", isAuthenticated, adminProductPage);
  // app.get("/admin/produk", isAuthenticated, adminProductPage);
  app.post(
    "/admin/products/add", // Your route to add a product
    multerUpload, // Multer middleware for file upload
    addProduct // Your product addition handler
  );
  app.get("/admin/product/:id", isAuthenticated, adminProductDetail);
  app.patch(
    "/admin/products/update/:id",
    multerUpload, // For handling image upload
    updateProduct
  );
  app.delete("/admin/products/delete/:id", isAuthenticated, deleteProduct);

  app.post("/admin/login", loginAdmin);
  app.get("/logout", logoutAdmin);

  app.get("*", (req, res) => {
    res.status(404).send("404 Not Found");
  });
};
