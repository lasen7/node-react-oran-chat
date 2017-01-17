import express from 'express';
import { openChat } from '../controllers';

const router = express.Router();

router.get('/', openChat.getOpenChat);
router.get('/:roomId', openChat.getOpenChatById)
router.post('/', openChat.addOpenChat);
router.delete('/', openChat.deleteOpenChat);

export default router;