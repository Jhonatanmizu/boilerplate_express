// @flow
import { Router } from 'express'
// Controllers
import HomeController from '../controllers/home.controller'

// Instance
const home = new HomeController()
const router = Router()
// Routes
router.get('/', home.fetchTest)
router.post('/', home.storeTest)

export default router
