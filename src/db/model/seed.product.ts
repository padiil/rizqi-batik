import mongoose from "mongoose";
import ProductModel from "./product.schema.js"; // Pastikan path sesuai dengan file model Anda

// Contoh data produk
const newProducts = [
  {
    image:
      "https://down-id.img.susercontent.com/file/37e5a94bfd11467bf00508940a4e4557@resize_w450_nl.webp",
    title: "Kain Batik Cap/Garutan - Rizqi Batik",
    shortDescription:
      "Batik cap berbahan katun prima dengan ukuran 2,25 m x 1,05 m.",
    longDescription:
      "Material : Katun Prima ukuran : 2,25 m x 1,05 m / 2 x 1,15 m. Bahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 75000,
    badge: { type: "baru" },
    isPreorder: false,
    stock: 7,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/49adadf72ceb110df43a9c5bbed07f8b@resize_w450_nl.webp",
    title: "Kain Batik Cap Tasik/Garutan",
    shortDescription: "Batik cap handmade dengan bahan katun prima.",
    longDescription:
      "Material : Katun Prima ukuran : 2 m x 1,15 m. Tanyakan stok sebelum order. Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 75000,
    isPreorder: false,
    stock: 5,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/d56b3848c3ec1fa053212b3202dab215@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    shortDescription:
      "Batik cap berbahan katun prima Garuda dengan ukuran 2,25 m x 1,05 m.",
    longDescription:
      "Material : Katun Prima Garuda ukuran : 2,25 m x 1,05 m. Bahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 75000,
    badge: { type: "terlaris" },
    isPreorder: false,
    stock: 10,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/dbcf5cc526c662d3c1f02732d06d40c9@resize_w450_nl.webp",
    title: "Kain Batik Cap/ Kain Batik Tasik/ Kain Batik Garutan",
    shortDescription: "Batik cap berbahan katun prima ukuran 2 m x 1,15 m.",
    longDescription:
      "Material : Katun Prima ukuran : 2 m x 1,15 m. Tanyakan stok sebelum order. Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 75000,
    isPreorder: true,
    stock: 0,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/db9e228d949dbdf693749ea00d649695@resize_w450_nl.webp",
    title: "Batik Cap Tasik Maroon",
    shortDescription: "Batik cap maroon berbahan katun prima Garuda.",
    longDescription:
      "Material : Katun Prima Garuda ukuran : 2,25 m x 1,05 m. Bahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 90000,
    isPreorder: true,
    stock: 1,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/7cc9d9292ecafaa7af5a42c9a323be3e@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    shortDescription: "Batik cap handmade berbahan katun prima Garuda.",
    longDescription:
      "Material : Katun Prima Garuda ukuran : 2,25 m x 1,05 m. Bahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 100000,
    isPreorder: false,
    stock: 5,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/9136637a85c31654d5760859844aa9f7@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    shortDescription: "Batik cap berbahan katun prima ukuran 2,25 m x 1,05 m.",
    longDescription:
      "Material : Katun Prima ukuran : 2,25 m x 1,05 m / 2 x 1,15 m. Bahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade, wajar jika terdapat titik-titik warna. Harga per bahan.",
    price: 90000,
    isPreorder: false,
    stock: 7,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/a5eb005c06acaab094019a61f521b065@resize_w450_nl.webp",
    title: "Batik Cap Tasik / Batik Garutan",
    shortDescription: "Batik cap handmade berbahan katun prima.",
    longDescription:
      "Material : Katun Prima ukuran : 2,25 m x 1,05 m / 2 x 1,15 m BAHAN BATIK READY JIKA HABIS BISA PRE-ORDER 7-10 hari (Minimal pembelian 5 pcs) *Tanyakan terlebih dahulu stok batik sebelum order *Harga yang tertera adalah harga per bahan *Kemungkinan ada sedikit perbedaan foto dengan aslinya dikarenakan pengaruh pencahayaan atau resolusi warna pada handphone yang digunakan. *Batik cap dibuat handmade apabila ada titik-titik warna di berbagai tempat itu wajar karena bukan printing *Mohon untuk mencantumkan di keterangan saat order: nomor/kode huruf/bagian kanan kiri/slide  Happy shopping 🌸  #rizqibatiktasik #batik #batikcap #kainbatik #kainbatikmurah #kainbatikindonesia #kainmurah",
    price: 90000,
    stock: 2,
    isPreorder: false,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/f4b1978b9aa9b70c48f2967914eb2f70@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Dusty Pink)",
    shortDescription: "Batik cap handmade berbahan katun prima.",
    longDescription:
      "Material : Katun Prima ukuran : 2,25 m x 1,05 m / 2 x 1,15 m BAHAN BATIK READY JIKA HABIS BISA PRE-ORDER 7-10 hari (Minimal pembelian 5 pcs) *Tanyakan terlebih dahulu stok batik sebelum order *Harga yang tertera adalah harga per bahan *Kemungkinan ada sedikit perbedaan foto dengan aslinya dikarenakan pengaruh pencahayaan atau resolusi warna pada handphone yang digunakan. *Batik cap dibuat handmade apabila ada titik-titik warna di berbagai tempat itu wajar karena bukan printing *Mohon untuk mencantumkan di keterangan saat order: nomor/kode huruf/bagian kanan kiri/slide  Happy shopping 🌸  #rizqibatiktasik #batik #batikcap #kainbatik #kainbatikmurah #kainbatikindonesia #kainmurah",
    price: 90000,
    stock: 1,
    isPreorder: false,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/e5e139695aa98f5fe847269e61740bec@resize_w450_nl.webp",
    title: "Batik Cap Tasik / Garutan",
    shortDescription: "Batik cap handmade berbahan katun prima Garuda.",
    longDescription:
      "Material : Katun Prima Garuda ukuran : 2,25 m x 1,05 m BAHAN BATIK READY JIKA HABIS BISA PRE-ORDER 7-10 hari (Minimal pembelian 5 pcs) *Tanyakan terlebih dahulu stok batik sebelum order *Harga yang tertera adalah harga per bahan *Kemungkinan ada sedikit perbedaan foto dengan aslinya dikarenakan pengaruh pencahayaan atau resolusi warna pada handphone yang digunakan. *Batik cap dibuat handmade apabila ada titik-titik warna di berbagai tempat itu wajar karena bukan printing *Mohon untuk mencantumkan di keterangan saat order: nomor/kode huruf/bagian kanan kiri/slide  Happy shopping 🌸  #rizqibatiktasik #batik #batikcap #kainbatik #kainbatikmurah #kainbatikindonesia #kainmurah",
    price: 90000,
    stock: 3,
    isPreorder: false,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/47737dbe118e390df176d6c8a0659d5d@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Navy)",
    shortDescription: "Batik cap navy berbahan katun prima Garuda.",
    longDescription:
      "Material : Katun Prima Garuda ukuran : 2,25 m x 1,05 m BAHAN BATIK READY JIKA HABIS BISA PRE-ORDER 7-10 hari (Minimal pembelian 5 pcs) *Tanyakan terlebih dahulu stok batik sebelum order *Harga yang tertera adalah harga per bahan *Kemungkinan ada sedikit perbedaan foto dengan aslinya dikarenakan pengaruh pencahayaan atau resolusi warna pada handphone yang digunakan. *Batik cap dibuat handmade apabila ada titik-titik warna di berbagai tempat itu wajar karena bukan printing *Mohon untuk mencantumkan di keterangan saat order: nomor/kode huruf/bagian kanan kiri/slide  Happy shopping 🌸  #rizqibatiktasik #batik #batikcap #kainbatik #kainbatikmurah #kainbatikindonesia #kainmurah",
    price: 75000,
    stock: 3,
    isPreorder: false,
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/9136637a85c31654d5760859844aa9f7@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    shortDescription: "Batik cap berbahan katun prima.",
    longDescription:
      "Material : Katun Prima ukuran : 2,25 m x 1,05 m / 2 x 1,15 m BAHAN BATIK READY JIKA HABIS BISA PRE-ORDER 7-10 hari (Minimal pembelian 5 pcs) *Tanyakan terlebih dahulu stok batik sebelum order *Harga yang tertera adalah harga per bahan *Kemungkinan ada sedikit perbedaan foto dengan aslinya dikarenakan pengaruh pencahayaan atau resolusi warna pada handphone yang digunakan. *Batik cap dibuat handmade apabila ada titik-titik warna di berbagai tempat itu wajar karena bukan printing *Mohon untuk mencantumkan di keterangan saat order: nomor/kode huruf/bagian kanan kiri/slide  Happy shopping 🌸  #rizqibatiktasik #batik #batikcap #kainbatik #kainbatikmurah #kainbatikindonesia #kainmurah",
    price: 90000,
    stock: 7,
    isPreorder: false,
  },

  {
    image:
      "https://down-id.img.susercontent.com/file/37e5a94bfd11467bf00508940a4e4557@resize_w450_nl.webp",
    title: "Kain Batik Cap/Garutan - Rizqi Batik",
    price: 75000,
    stock: 7,
    isPreorder: false,
    badge: {
      type: "baru",
    },
    longDescription:
      "Material: Katun Prima\nUkuran: 2,25 m x 1,05 m\n\nBahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs). Batik cap dibuat handmade sehingga terdapat titik-titik warna.\n\n* Harga per bahan.\n* Mohon tanyakan stok terlebih dahulu sebelum order.\n\n#batik #kainbatik #batikcap",
    isDiscounted: true,
    discountPercentage: 10,
    shortDescription:
      "Batik cap handmade dengan titik warna khas, bahan ready dan diskon 10%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/49adadf72ceb110df43a9c5bbed07f8b@resize_w450_nl.webp",
    title: "Kain Batik Cap Tasik/Garutan",
    price: 75000,
    stock: 5,
    isPreorder: false,
    badge: {
      type: "eksklusif",
    },
    longDescription:
      "Material: Katun Prima\nUkuran: 2 m x 1,15 m\n\nBatik cap dibuat handmade sehingga terdapat titik-titik warna. Tanyakan stok sebelum order.\n\n#batik #kainbatik #kainmurah",
    isDiscounted: false,
    shortDescription:
      "Batik cap eksklusif, handmade dengan detail warna yang unik.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/d56b3848c3ec1fa053212b3202dab215@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 80000,
    stock: 10,
    isPreorder: false,
    badge: {
      type: "terlaris",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nBahan batik ready. Jika habis bisa pre-order 7-10 hari (minimal pembelian 5 pcs).\n\n#batik #kainbatik #batikindonesia",
    isDiscounted: true,
    discountPercentage: 15,
    shortDescription: "Batik cap terlaris, handmade dengan diskon 15%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-22120-7sguqw3ho1kv4e@resize_w450_nl.webp",
    title: "Batik Tasik - Kain Batik Premium",
    price: 135000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari) karena stok kosong. Minimal pembelian 5 pcs.\n\n#batik #preorder #kainindonesia",
    isDiscounted: false,
    shortDescription: "Batik premium untuk preorder dengan kualitas terbaik.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ac98f463440e46081d4e4d74ffcb3e22@resize_w450_nl.webp",
    title: "BATIK CAP TASIK/GARUTAN",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "baru",
    },
    longDescription:
      "Material: Katun Prima\nUkuran: 2 m x 1,15 m\n\nProduk preorder (7-10 hari). Handmade dengan detail titik warna khas batik asli.\n\n#batik #preorder #kainmurah",
    isDiscounted: true,
    discountPercentage: 5,
    shortDescription: "Produk preorder, handmade dengan diskon 5%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/f40e7fe289a9b573eb879bfc4ea50c91@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan (Navy-Mocca)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "eksklusif",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,30 m x 1,05 m\n\nProduk ini handmade dengan detail titik warna khas batik asli. Tersedia untuk preorder 7-10 hari (minimal pembelian 5 pcs).\n\n#batik #kainbatik #preorder",
    isDiscounted: false,
    shortDescription: "Batik eksklusif, handmade dengan preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/58d785948d98fbf18e936b1b16a192ed@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 125000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "terlaris",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainindonesia #batikcap",
    isDiscounted: true,
    discountPercentage: 10,
    shortDescription: "Produk terlaris, preorder dengan diskon 10%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/067ca8ad2667df41b99ab497772726f1@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan (Mustard)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk handmade dengan kualitas prima. Tersedia preorder 7-10 hari (minimal pembelian 5 pcs).\n\n#batik #kainbatik #batikindonesia",
    isDiscounted: false,
    shortDescription: "Batik handmade berkualitas dengan preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ea4e10f797dd66ac77e3e4acd18f0b34@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "baru",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,30 m x 1,05 m\n\nHandmade dengan kualitas tinggi. Hanya tersedia untuk preorder 7-10 hari.\n\n#batik #preorder #kainmurah",
    isDiscounted: true,
    discountPercentage: 5,
    shortDescription: "Produk baru, preorder dengan diskon 5%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/191db95f251e5126dadeb7d28d7c31bb@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 85000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk preorder 7-10 hari (minimal pembelian 5 pcs). Handmade dengan detail unik.\n\n#batik #kainbatik #batikmurah",
    isDiscounted: false,
    shortDescription:
      "Batik handmade dengan preorder 7-10 hari dan detail unik.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/f40e7fe289a9b573eb879bfc4ea50c91@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan (Navy-Mocca)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "eksklusif",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,30 m x 1,05 m\n\nProduk ini handmade dengan detail titik warna khas batik asli. Tersedia untuk preorder 7-10 hari (minimal pembelian 5 pcs).\n\n#batik #kainbatik #preorder",
    isDiscounted: false,
    shortDescription: "Batik eksklusif, handmade dengan preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/58d785948d98fbf18e936b1b16a192ed@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 125000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "terlaris",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainindonesia #batikcap",
    isDiscounted: true,
    discountPercentage: 10,
    shortDescription:
      "Batik Cap Tasik/Garutan, handmade dengan preorder 7-10 hari, diskon 10%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/067ca8ad2667df41b99ab497772726f1@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan (Mustard)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk handmade dengan kualitas prima. Tersedia preorder 7-10 hari (minimal pembelian 5 pcs).\n\n#batik #kainbatik #batikindonesia",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan (Mustard), handmade dan preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ea4e10f797dd66ac77e3e4acd18f0b34@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "baru",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,30 m x 1,05 m\n\nHandmade dengan kualitas tinggi. Hanya tersedia untuk preorder 7-10 hari.\n\n#batik #preorder #kainmurah",
    isDiscounted: true,
    discountPercentage: 5,
    shortDescription:
      "Batik Cap Tasik/Garutan, handmade dan preorder 7-10 hari, diskon 5%.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/191db95f251e5126dadeb7d28d7c31bb@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 85000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk preorder 7-10 hari (minimal pembelian 5 pcs). Handmade dengan detail unik.\n\n#batik #kainbatik #batikmurah",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan, handmade dengan preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/dc088678693e68a9e0e9e7c1a383a4b1@resize_w450_nl.webp",
    title: "Kain Batik Cap",
    price: 75000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription: "Kain Batik Cap, tersedia untuk preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/396fbb5a82b7052b30d12716c5830da3@resize_w450_nl.webp",
    title: "Batik Cap Tasik",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: {
      type: "terlaris",
    },
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription: "Batik Cap Tasik, preorder 7-10 hari, produk terlaris.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/80025c7468e670df8a0e52af63f4bc42@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Hitam Putih)",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan (Hitam Putih), preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/2208045754e8e823e617f135116ac2ee@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Hitam Putih)",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan (Hitam Putih), preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/01ea32b63f9ef80edb4af26ee825ba8f@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Merah Putih)",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan (Merah Putih), preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/91d435daa14cde160d23b5cab09f4893@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Merah Putih)",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan (Merah Putih), preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/7787f17a34ffd1b9f57865ae8b3b4b35@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan Motif Sisik Naga",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan Motif Sisik Naga, preorder 7-10 hari.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/9259bc42d25b77525b64f6cb2ce9c985@resize_w450_nl.webp",
    title: "Batik Cap Kombinasi / Batik Tasik / Batik Garutan",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Kombinasi, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ff5cdcddb7fde8b277cc3467b53c288b@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan Motif Slampad (Mocca)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Motif Slampad Mocca, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/325a81a1e1a8e1d30e68f25c4e3aaca7@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Salur - Slampad)",
    price: 65000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Motif Salur - Slampad, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/fb8fd3d5bba55a7c299ac2594086a8b6@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Hitam - Dusty Pink)",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima\nUkuran: 2,25 m x 1,05 m / 2 x 1,15 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Hitam - Dusty Pink, Katun Prima, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/8436f68751aba9c1c33e7033fdc6377b@resize_w450_nl.webp",
    title: "Masker Kain Batik 2ply Bisa Diisi Tissue, Earloop dan Headloop",
    price: 8000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Masker Kain Dewasa\nMotif Random. Tanyakan terlebih dahulu motif yang tersedia.\n\nBahan: Katun Batik Cap\n2 layer, bisa dicuci & diselipkan tissue.",
    isDiscounted: false,
    shortDescription:
      "Masker Kain Batik 2ply, katun batik cap, bisa diisi tissue, preorder.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/2dbf1f75f61d5a396124bc2523497892@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan Kombinasi",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Kombinasi, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/ad2ce815a7c6fc686753e99eff74df09@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan (Maroon, Dusty)",
    price: 75000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Maroon - Dusty, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/4b4671aff799506d1d3eeea38afd52a8@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    price: 85000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/1b4d6e34f7c2d77bae2b41b9fdfdd321@resize_w450_nl.webp",
    title: "Batik Cap Tasik / Batik Garutan Motif Zigzag (Dusty Pink)",
    price: 70000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima\nUkuran: 2,25 m x 1,05 m / 2 x 1,15 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Motif Zigzag Dusty Pink, Katun Prima, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/765679a5781164eebb0aa67fca92a76b@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    price: 70000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/d8dc2054ca44b8fd7f6c916cb6249b9b@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    price: 85000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/2c214200475e23012577acf0e9e42702@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/5628b96112cf7306ef991126593c320b@resize_w450_nl.webp",
    title: "Batik Cap Tasik/Garutan",
    price: 90000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/c983746a1be878d319e74af68d6da53a@resize_w450_nl.webp",
    title: "BATIK CAP TASIK/GARUTAN (ABU-ABU)",
    price: 75000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap Tasik/Garutan Abu-Abu, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/8da14cd37afd19aad5ed13b56172eaa7@resize_w450_nl.webp",
    title: "Batik Cap / Batik Tasik / Batik Garutan",
    price: 80000,
    stock: 0,
    isPreorder: true,
    badge: null,
    longDescription:
      "Material: Katun Prima Garuda\nUkuran: 2,25 m x 1,05 m\n\nProduk ini hanya tersedia untuk preorder (7-10 hari). Minimal pembelian 5 pcs.\n\n#batik #kainbatik #batikcap",
    isDiscounted: false,
    shortDescription:
      "Batik Cap, Katun Prima Garuda, preorder 7-10 hari, minimal beli 5 pcs.",
  },
];

// Fungsi untuk menambahkan produk
const addProducts = async () => {
  try {
    for (const product of newProducts) {
      // Menambahkan produk baru jika belum ada
      await ProductModel.create(product);
      console.log(`Produk "${product.title}" berhasil ditambahkan.`);
    }
  } catch (error) {
    console.error("Gagal menambahkan produk:", error);
  }
};

// Fungsi utama untuk menjalankan script
const run = async () => {
  try {
    // Koneksi ke MongoDB
    await mongoose.connect("mongodb://localhost:27017/bumi_karya");
    console.log("Koneksi ke MongoDB berhasil!");

    // Menambahkan produk
    await addProducts();

    // Menutup koneksi setelah operasi selesai
    mongoose.disconnect();
  } catch (error) {
    console.error("Gagal menghubungkan ke MongoDB:", error);
  }
};

// Menjalankan script
run();
