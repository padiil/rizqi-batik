export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        return next(); // Jika sudah login, lanjutkan ke route berikutnya
    }
    else {
        res.redirect("/admin/login"); // Jika belum login, redirect ke halaman login
    }
};
export const redirectIfAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        // Jika sudah login, arahkan ke dashboard
        res.redirect("/admin/dashboard");
    }
    else {
        next(); // Lanjutkan ke route berikutnya
    }
};
