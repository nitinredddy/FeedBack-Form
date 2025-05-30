import { Router } from "express";
import { fetchAllFeedBacks, submitAFeedBack } from "../controllers/feedback.controller.js";

const router = Router()

router.route("/feedback").post(submitAFeedBack)
router.route("/all-feedbacks").get(fetchAllFeedBacks)

export default router