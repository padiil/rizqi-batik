import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.user) {
    return next(); // Jika sudah login, lanjutkan ke route berikutnya
  } else {
    res.redirect("/admin/login"); // Jika belum login, redirect ke halaman login
  }
};

export const redirectIfAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.user) {
    // Jika sudah login, arahkan ke dashboard
    res.redirect("/admin/dashboard");
  } else {
    next(); // Lanjutkan ke route berikutnya
  }
};
