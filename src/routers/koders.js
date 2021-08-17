const express = require("express");
const koders = require("../usecases/koders");
const router = express.Router();
const isAuth = require("../middleware/auth");

router.get("/",isAuth ,async (request,response)=>{
    try {
        const allKoders = await koders.getAll();
        response.json({
            success: true,
            message: "All koders",
            data:{
                koders: allKoders
            }
        });
    } catch (error) {
        response.status(error.status).json({
            success: false,
            message: "Error at get all koders",
            error:error.message
        });
    }

});

router.post("/",async (request,response)=>{
    try {
        const koder = await koders.create(request.body);
        response.status(201).json({
            success: true,
            message: "Created",
            data:{
                koders: koder
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error create koder",
            error:error.message
        });
    }

});

router.delete("/:id",isAuth ,async (request,response)=>{
    try {
        const idKoder = request.params.id;
        const koderDeleted = await koders.deleteById(idKoder);
        response.status(200).json({
            success: true,
            message: "Deleted",
            data:{
                koders: koderDeleted
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error at delete koder",
            error:error.message
        });
    }

});

router.patch("/:id",isAuth ,async (request,response)=>{
    try {
        const { id } = request.params;
        const { body } = request;
        const koder = await koders.updateById(id,body);
        response.status(200).json({
            success: true,
            message: "Updated",
            data:{
                koders: koder
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error at update koder",
            error:error.message
        });
    }

});

module.exports = router;