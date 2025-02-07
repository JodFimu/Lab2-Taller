import { Router } from "express";
import { saveAppointment, getAppointments,  updateAppointment , updateStatusAppointment} from "./appointment.controller.js";
import { createAppointmentValidator, getAppointmentsValidator, updateAppointmentValidator, cancelAppointmentValidator} from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/getAppointments/:uid", getAppointmentsValidator, getAppointments);
router.put("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);
router.patch("/cancelAppointment/:id", cancelAppointmentValidator, updateStatusAppointment);

export default router;