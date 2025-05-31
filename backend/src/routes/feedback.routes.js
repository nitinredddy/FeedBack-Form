import { Router } from "express";
import { fetchAllFeedBacks, submitAFeedBack, export2CSV } from "../controllers/feedback.controller.js";

const router = Router()

router.route("/feedback").post(submitAFeedBack)
router.route("/all-feedbacks").get(fetchAllFeedBacks)
router.route("/feedbacks/csv").get(export2CSV);

export default router