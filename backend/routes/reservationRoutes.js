import express from "express";
import { getHostReservations, getUserReservations, createReservation, deleteReservation } from "../controllers/reservationController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/host", auth, getHostReservations);
router.get("/user", auth, getUserReservations);
router.post("/", createReservation);
router.delete("/:id", auth, deleteReservation);

export default router;