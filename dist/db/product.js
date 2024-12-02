"use strict";
const katalogView = [
    {
        image: 'https://example.com/image1.jpg',
        title: 'Batik Tulis Elegan',
        shortDescription: 'Batik tulis dengan desain eksklusif.',
        longDescription: 'Batik tulis berbahan katun premium dengan motif khas Nusantara, cocok untuk acara formal maupun casual.',
        price: 500000,
        badge: { type: 'new', text: 'Baru' },
        isPreorder: false,
        stock: 10,
    },
    {
        image: 'https://example.com/image2.jpg',
        title: 'Batik Modern Kontemporer',
        shortDescription: 'Batik cap modern dengan warna cerah.',
        longDescription: 'Dibuat dengan teknik cap modern, batik ini memiliki motif kontemporer yang cocok untuk generasi muda.',
        price: 350000,
        badge: { type: 'diskon', text: 'Diskon 20%' },
        isPreorder: true,
        stock: 0,
    },
    {
        image: 'https://example.com/image3.jpg',
        title: 'Batik Eksklusif Premium',
        shortDescription: 'Batik eksklusif untuk koleksi pribadi.',
        longDescription: 'Batik tulis eksklusif berbahan sutra, dirancang dengan keindahan detail dan hanya tersedia dalam jumlah terbatas.',
        price: 1500000,
        badge: { type: 'eksklusif', text: 'Eksklusif' },
        isPreorder: false,
        stock: 5,
    },
];
