import mongoose, { Schema } from "mongoose";
// Schema untuk badge (untuk diskon atau label lainnya)
const badgeSchema = new Schema({
    type: {
        type: String,
        enum: ["baru", "eksklusif", "terlaris"],
        required: true,
    },
});
// Schema untuk produk Batik
const productSchema = new Schema({
    image: { type: String, required: true }, // URL gambar produk
    title: { type: String, required: true },
    shortDescription: { type: String, required: true }, // Deskripsi singkat
    longDescription: { type: String, required: true }, // Deskripsi lengkap
    price: { type: Number, required: true }, // Harga produk
    badge: { type: badgeSchema, required: false }, // Badge seperti diskon atau produk baru (opsional)
    isPreorder: { type: Boolean, required: true, default: false }, // Status preorder
    stock: { type: Number, required: true }, // Stok produk
    isDiscounted: { type: Boolean, required: false, default: false }, // Status apakah diskon
    discountPercentage: { type: Number, required: false, min: 0, max: 100 }, // Persentase diskon
}, {
    timestamps: true, // Menambahkan createdAt dan updatedAt
    _id: true, // Pastikan setiap dokumen memiliki _id otomatis oleh MongoDB
});
// Membuat model produk
const ProductModel = mongoose.model("Product", productSchema);
// Meng-export model agar bisa digunakan di file lain
export default ProductModel;
