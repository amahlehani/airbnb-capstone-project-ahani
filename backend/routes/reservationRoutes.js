import express from "express";
import { getHostReservations, getUserReservations, getAllReservations, createReservation, deleteReservation } from "../controllers/reservationController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/host", auth("host"), getHostReservations);
router.get("/user", auth("user"), getUserReservations);
router.get("/", auth("host"), getAllReservations);
router.post("/", auth("user"), createReservation);
router.delete("/:id", auth("user"), deleteReservation);

export default router;