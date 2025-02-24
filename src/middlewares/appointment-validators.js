import { body , param} from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const getAppointmentsValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
]


export const updateAppointmentValidator = [
    param("id").optional().isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("pet").optional().isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("user").optional().isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
]

export const cancelAppointmentValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
]