import { Router } from "express";
import { register, login } from "../controllers/ auth.controller"
import { validate } from "../middleware/validate.middleware";
import { registerSchema, loginSchema } from "../validators/auth.validator";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/register", register);
router.post("/login", login);

export default router;

