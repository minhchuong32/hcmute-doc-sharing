import express from "express";
import {
  uploadDocument,
  getAllDocuments,
} from "../controllers/document.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/upload", protect, uploadDocument);
router.get("/", getAllDocuments);

export default router;
