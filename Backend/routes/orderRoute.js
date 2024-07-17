import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, verifyOrder, userOrders, deleteFalse, listOrders, updateStatus } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder)
orderRouter.post('/verify', verifyOrder)
orderRouter.post('/user-orders', authMiddleware, userOrders)
orderRouter.post('/delete-false', deleteFalse)
orderRouter.post('/status', updateStatus)
orderRouter.get('/list', listOrders)

export default orderRouter;