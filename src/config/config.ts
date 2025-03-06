if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
  throw new Error(
    "As variáveis de ambiente JWT_SECRET e JWT_REFRESH_SECRET devem ser definidas.",
  );
}

const config = {
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};

export { config };
