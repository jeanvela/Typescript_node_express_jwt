import { Router } from 'express'
import authRoutes from './auth.routes'
import specialRoutes from './special.routes'

const router = Router()

router.use('/api', authRoutes)
router.use('/api', specialRoutes)

export default router