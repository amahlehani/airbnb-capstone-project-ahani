import express from "express";
import { getAccommodations, getAccommodation, getHostAccommodations, createAccommodation, deleteAccommodation, updateAccommodation } from "../controllers/accommodationController.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/cloudinaryStorage.js";

const router = express.Router();

router.get("/", getAccommodations);
router.get("/:id", getAccommodation)
router.get("/host/listings", auth("host"), getHostAccommodations);
router.post("/", auth("host"), upload.array("images", 5), createAccommodation);
router.delete("/:id", auth("host"), deleteAccommodation);
router.put("/:id", auth("host"), upload.array("images", 5), updateAccommodation);


export default router; 