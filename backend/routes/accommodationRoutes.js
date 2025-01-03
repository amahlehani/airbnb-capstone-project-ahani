import express from "express";
import { getAccommodation, createAccommodation, deleteAccommodation } from "../controllers/accommodationController.js";

const router = express.Router();

router.get("/", getAccommodation);
router.post("/", createAccommodation);
router.delete("/:id", deleteAccommodation);


export default router; 