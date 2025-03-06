// infrastructure/logging/logger.ts
import winston from "winston";

// Configuração dos níveis de log
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define o nível de log com base no ambiente
const level = () => {
  const env = process.env.NODE_ENV || "development";
  return env === "development" ? "debug" : "warn";
};

// Cores para os logs (opcional)
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

// Formato dos logs
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Transports (onde os logs serão armazenados)
const transports = [
  new winston.transports.Console(), // Log no console
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }), // Log de erros em arquivo
  new winston.transports.File({ filename: "logs/all.log" }), // Todos os logs em arquivo
];

// Cria o logger
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;
