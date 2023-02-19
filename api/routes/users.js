import express from "express";
import { addUsers } from "../controllers/users.js";
const router = express.Router()

router.get('/', addUsers)


export default router