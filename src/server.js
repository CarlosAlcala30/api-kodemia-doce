//definicion del servidor
const express = require('express');
const server = express();
const kodersRouter = require("./routers/koders");


server.use(express.json());

server.use("/koders",kodersRouter);

module.exports = server;

//1.- asegurarnos de que nuestro modelo existe
//2.- crear caso de uso necesario
//3.- crear el endpoint