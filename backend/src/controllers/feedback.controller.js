import { FeedBack } from "../models/feedback.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const submitAFeedBack = asyncHandler(async(req,res)=>{
    const {name,email,rating,comment}=req.body

    if(!name){
        throw new ApiError(400,"Name is required")
    }
    if(!email){
        throw new ApiError(400,"Email is required")
    }
    if(!rating){
        throw new ApiError(400,"Rating is required")
    }

    const feedback = await FeedBack.create({
        name:name,
        email:email.toLowerCase(),
        rating:rating,
        comment:comment
    })

    if(!feedback){
        throw new ApiError(500,"Some error occurred while submitting your form")
    }

    return res
    .status(200)
    .json(new ApiResponse(200,feedback,"Feedback submitted successfully"))
})

const fetchAllFeedBacks = asyncHandler(async(req,res)=>{
    const token = req.headers["x-admin-secret"]
    if(token!==process.env.ADMIN_SECRET){
        throw new ApiError(400,"Unauthorised access")
    }
    const feedbacks = await FeedBack.find()

    console.log(feedbacks)

    return res
    .status(200)
    .json(new ApiResponse(200,feedbacks,"Feedbacks fetched successfully"))
})

export {submitAFeedBack,fetchAllFeedBacks}