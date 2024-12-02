import { Request, Response } from "express";
import ProductModel from "../db/model/product.schema.js";
import Product from "../db/model/product.schema.js";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

// Set up Multer storage and file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "public", "uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cb(null, filename);
  },
});

export const multerUpload = multer({ storage: storage }).single("image"); // Match 'image' field

export const berandaPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const viewHomeKatalog: number = 8;

  const currentProducts = await Product.find();

  res.render("pages/beranda/beranda.ejs", {
    title: "Beranda",
    katalogView: currentProducts.slice(0, viewHomeKatalog),
  });
};

export const deskripsiPage = (req: Request, res: Response): void => {
  res.render("pages/deskripsi/deskripsi.ejs", {
    title: "Deskripsi",
  });
};

export const checkoutPage = (req: Request, res: Response): void => {
  res.render("pages/checkout/checkout.ejs", {
    title: "Checkout",
  });
};

export const belanjaPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page: number = parseInt(req.query.page as string, 10) || 1;
    const perPage: number = 16;
    const searchQuery: string = (req.query.search as string) || ""; // Ambil query pencarian

    // Buat filter pencarian berdasarkan title dan shortDescription
    const searchFilter = searchQuery
      ? {
          $or: [
            { title: { $regex: searchQuery, $options: "i" } }, // Pencarian berdasarkan title
            { shortDescription: { $regex: searchQuery, $options: "i" } }, // Pencarian berdasarkan shortDescription
          ],
        }
      : {};

    // Hitung total produk berdasarkan filter pencarian
    const totalProducts = await Product.countDocuments(searchFilter);

    const startIndex: number = (page - 1) * perPage;
    const endIndex: number = Math.min(page * perPage, totalProducts);

    // Ambil produk sesuai dengan filter pencarian dan pagination
    const currentProducts = await Product.find(searchFilter)
      .skip(startIndex)
      .limit(perPage);

    const totalPages: number = Math.ceil(totalProducts / perPage);

    // Render halaman belanja dengan data produk dan query pencarian
    res.render("pages/belanja/belanja.ejs", {
      title: "Belanja",
      katalogView: currentProducts,
      currentPage: page,
      totalPages: totalPages,
      startIndex: startIndex + 1,
      endIndex: endIndex,
      totalProducts: totalProducts,
      searchQuery, // Kirimkan searchQuery agar bisa digunakan di EJS
    });
  } catch (error) {
    console.error("Error mengambil data produk:", error);
    res.status(500).send("Terjadi kesalahan dalam mengambil data produk.");
  }
};

export const kontakPage = (req: Request, res: Response): void => {
  res.render("pages/kontak/kontak.ejs", {
    title: "Kontak",
  });
};

// Menampilkan halaman keranjang
export const keranjangPage = (req: Request, res: Response): void => {
  res.render("pages/keranjang/keranjang.ejs", {
    title: "Keranjang",
  });
};

// Menampilkan halaman detail produk
export const productDetailPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId: string = req.params.id;

  try {
    // Cari produk berdasarkan ID
    const product = await ProductModel.findById(productId);

    if (!product) {
      res
        .status(404)
        .render("pages/404", { message: "Produk tidak ditemukan" });
      return;
    }

    // Pastikan semua properti yang dibutuhkan tersedia
    const fullProduct = {
      ...product.toObject(),
      badge: product.badge?.type || null,
      isDiscounted: product.isDiscounted || false,
      discountPercentage: product.discountPercentage || 0,
      longDescription:
        product.longDescription || "Deskripsi lengkap belum tersedia.",
    };

    // Render halaman detail produk jika ditemukan
    res.render("pages/product-detail/product-detail.ejs", {
      title: `Detail Produk - ${product.title}`,
      product: fullProduct,
    });
  } catch (error) {
    // Menangani kasus ID tidak valid atau error lainnya
    console.error(error);
    res.status(500).render("pages/404", {
      message: "Terjadi kesalahan saat mencari produk",
    });
  }
};

export const adminDashboardPage = (req: Request, res: Response): void => {
  res.render("pages/admin/dashboard/dashboard.ejs", {
    title: "Dashboard",
  });
};

export const adminProductPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Extract query parameters with default values
    const {
      page = "1",
      limit = "10",
      search = "",
      badgeFilter = "",
    } = req.query;

    // Convert page and limit to numbers
    const currentPage = Math.max(Number(page), 1); // Ensure it's at least 1
    const pageSize = Math.max(Number(limit), 1); // Ensure it's at least 1

    // Build filters for search and badge
    const searchFilter = search
      ? { title: { $regex: search, $options: "i" } }
      : {};
    const badgeFilterCondition = badgeFilter
      ? { "badge.type": badgeFilter }
      : {};

    // Combine filters
    const filter = { ...searchFilter, ...badgeFilterCondition };

    // Fetch paginated products
    const products = await Product.find(filter)
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize);

    // Fetch total count for pagination
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / pageSize);

    const preorderProducts = await Product.countDocuments({
      $or: [{ isPreorder: true }, { stock: 0 }],
    });

    const readyStockProducts = await Product.countDocuments({
      stock: { $gt: 0 },
    });

    // Render admin product page with necessary data
    res.render("pages/admin/product/product.ejs", {
      title: "Manajemen Produk",
      katalogView: products,
      totalProducts, // Pass totalProducts to the view
      readyStockProducts, // Pass readyStockProducts to the view
      preorderProducts, // Pass preorderProducts to the view
      currentPage, // Pass currentPage to the view
      totalPages, // Pass totalPages to the view
      search, // Pass search query to the view
      badgeFilter, // Pass badgeFilter to the view
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Terjadi kesalahan pada server.");
  }
};

export const adminProductDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Assuming the product ID is sent as a URL parameter

    // Fetch product details by ID
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Respond with product details
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    shortDescription,
    longDescription,
    price,
    stock,
    hasDiscount,
    discountPercentage,
    badge,
    isPreorder,
  } = req.body;

  // Validation for required fields
  if (!title || !price || !shortDescription || !longDescription) {
    res.status(400).send("Semua field harus diisi!");
    return;
  }

  // Check if image is uploaded
  if (!req.file) {
    res.status(400).send("Gambar produk harus diupload!");
    return;
  }

  const productImagePath = req.file ? `/uploads/${req.file.filename}` : "";

  let discount = 0;
  if (hasDiscount === "on") {
    if (
      !discountPercentage ||
      discountPercentage < 1 ||
      discountPercentage > 100
    ) {
      res.status(400).send("Discount harus antara 1% dan 100%");
      return;
    }
    discount = discountPercentage;
  }

  const productStock = stock ? parseInt(stock, 10) : 0;

  // Handle badge field
  let productBadge = null; // Default to null if no badge is selected
  if (badge) {
    if (["baru", "eksklusif", "terlaris"].includes(badge)) {
      productBadge = { type: badge }; // Create the badge object with the correct type
    } else {
      res
        .status(400)
        .send(
          "Invalid badge value. Must be 'baru', 'eksklusif', or 'terlaris'."
        );
      return;
    }
  }

  const isPreorderFlag = isPreorder === "on" ? true : false;

  try {
    // Save the product to the database
    await Product.create({
      title,
      shortDescription,
      longDescription,
      price,
      stock: productStock,
      discount,
      badge: productBadge, // Use the badge object or null
      preorder: isPreorderFlag,
      image: productImagePath,
    });

    res.send(
      "<script>alert('Produk berhasil ditambahkan!'); window.location.href='/admin/dashboard';</script>"
    ); // Redirect to product list after creation with alert
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Gagal menambah produk!");
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.id;
  const updates = req.body;

  try {
    // If the stock is set to 0 or blank, set isPreorder to true
    if (updates.stock === 0 || updates.stock === "" || updates.stock === null) {
      updates.isPreorder = true;
    } else {
      updates.isPreorder = false;
    }

    // If there's a new image, include it in the update
    if (req.file) {
      updates.image = req.file.path; // Save the image path if it's uploaded
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updates }, // Use $set for partial updates
      { new: true, runValidators: true } // Return updated document
    );

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.send(
      "<script>alert('Product updated successfully!'); window.location.href='/admin/dashboard';</script>"
    ); // Redirect to dashboard with alert
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product", error });
  }
};

// Get the current directory equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to delete product
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productId = req.params.id;

  try {
    // Cari produk berdasarkan ID
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }

    // Hapus gambar jika ada
    if (product.image) {
      const imagePath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        product.image
      );
      console.log("Attempting to delete image at:", imagePath);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath); // Menggunakan unlinkSync untuk memastikan sinkronisasi
        console.log("Image deleted successfully");
      } else {
        console.log("Image file not found at path:", imagePath);
      }
    }

    // Hapus produk dari database
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product",
      error: err instanceof Error ? err.message : String(err),
    });
  }
};

export const adminLoginPage = (req: Request, res: Response): void => {
  res.render("pages/admin/login/login.ejs", {
    title: "Login Admin",
  });
};

export const loginAdmin = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    req.session.user = { id: "1", username };
    res.redirect("/admin/dashboard");
  } else {
    res
      .status(401)
      .send(
        "<script>alert('Username atau password salah. Silakan coba lagi.'); window.location.href='/admin/login';</script>"
      );
  }
};

export const logoutAdmin = (req: Request, res: Response): void => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Failed to log out.");
    } else {
      res.redirect("/admin/login");
    }
  });
};
