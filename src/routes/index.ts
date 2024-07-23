import { Router } from 'express'
import LoadsController from '../controllers/LoadsController'

const router = Router()

router.get('/', LoadsController.index.bind(LoadsController))
router.get('/show', LoadsController.show.bind(LoadsController))

export default router
