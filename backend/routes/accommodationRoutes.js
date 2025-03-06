import express from "express";
import { getAccommodation, createAccommodation, deleteAccommodation } from "../controllers/accommodationController.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/cloudinaryStorage.js";

const router = express.Router();

router.get("/", getAccommodation);
router.post("/", auth("host"), upload.array("images", 5), createAccommodation);
router.delete("/:id", auth("host"), deleteAccommodation);


export default router; 