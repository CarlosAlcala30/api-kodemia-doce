const express = require("express");
const koders = require("../usecases/koders");
const router = express.Router();

router.get("/",async (request,response)=>{
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

router.delete("/",async (request,response)=>{
    try {
        const koder = await koders.deleteOne(request.body);
        response.status(200).json({
            success: true,
            message: "Deleted",
            data:{
                koders: koder
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


module.exports = router;