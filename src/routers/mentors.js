const express = require("express");
const router = express.Router();
const mentors = require("../usecases/mentors");
const isAuth = require("../middleware/auth");

router.post("/",async (request,response)=>{
    try {
        const mentorCreated= await mentors.create(request.body)
        response.status(201).json({
            success: true,
            message: "Created",
            data:{
                mentor: mentorCreated
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error create mentor",
            error:error.message
        });
    }

});

router.get("/",isAuth,async (request,response)=>{
    try {
        const allMentors = await mentors.getAll();
        response.json({
            success: true,
            message: "All mentors",
            data:{
                mentors: allMentors
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error at get all mentors",
            error:error.message
        });
    }

});

router.get("/:id",isAuth,async(request,response)=>{
    try {
        const {id} = request.params;
        const mentor = await mentors.getById(id);
        response.json({
            success: true,
            message: "Mentor",
            data:{
                mentor: mentor
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error get mentor",
            error:error.message
        });
    }
});

router.patch("/:id",isAuth,async(request,response)=>{
    try {
        const {id} = request.params;
        const {body} = request;
        const mentorUpdated = await mentors.updateById(id,body);
        response.json({
            succes:true,
            message: "Mentor Updated",
            data:{
                mentor:mentorUpdated
            }
        });
    } catch (error) {
        response.json({
            success: false,
            message: "Error at update mentor",
            error:error.message
        });
    }
});

module.exports = router;