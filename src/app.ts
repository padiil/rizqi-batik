import fs from "fs";
import path from "path";
import multer from "multer";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { routes } from "./routes/index.routes.js";
import session from "express-session";
import dbConnect from "./db/dbConnect.js";

dotenv.config();

// Menggunakan import.meta.url untuk mendapatkan path direktori
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);
const VIEWS_PATH: string = "src/views/";
const STATIC_FILES_PATH: string = path.join(__dirname, "../public"); // Sesuaikan path untuk folder public

// Menyajikan file statis dari folder public/uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "public", "uploads")));

// Koneksi ke MongoDB
dbConnect();

// Middleware untuk parsing data form dan JSON
app.use(express.urlencoded({ extended: true })); // Untuk form data
app.use(express.json()); // Untuk JSON body

// Pengaturan view engine dan folder views
app.set("views", VIEWS_PATH);
app.set("view engine", "ejs");

// Menyajikan file statis dari folder public
app.use(express.static(STATIC_FILES_PATH));

// Tentukan folder upload di public/uploads
const uploadFolder = path.join(__dirname, "..", "public", "uploads");

// Pastikan folder uploads ada
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder); // Menyimpan file di folder public/uploads
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Ambil ekstensi file
    const filename = Date.now() + ext; // Nama file unik dengan timestamp
    cb(null, filename); // Nama file yang disimpan
  },
});

const upload = multer({ storage: storage });

// Session configuration
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // secure false untuk development
  })
);

// Routes (pastikan routes sudah terdefinisi dengan benar)
routes(app);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
