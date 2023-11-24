import express from 'express';
import { signup } from '../controller/userController.js';

const route=express.Router();

route.post("/create",signup)

export default route;