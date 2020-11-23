module.exports = {
  HOST: "localhost",
  USER: "Nostra",
  PASSWORD: "Nostra",
  DB: "Nostra Movie",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
