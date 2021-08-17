//definicion del servidor
const express = require('express');
const server = express();
const kodersRouter = require("./routers/koders");
const mentorsRouter = require("./routers/mentors")
const logger = require("./middleware/log");
const authRouter = require("./routers/auth");

server.use(express.json());
//server.use(logger.log(request,response,next))

server.use("/mentors",mentorsRouter);
server.use("/koders",kodersRouter);
server.use("/auth",authRouter);

module.exports = server;

//1.- asegurarnos de que nuestro modelo existe
//2.- crear caso de uso necesario
//3.- crear el endpoint