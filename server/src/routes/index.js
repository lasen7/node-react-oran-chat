import express from 'express';
import openChat from './openChat';

const router = express.Router();

router.use('/openChat', openChat);

export default router;