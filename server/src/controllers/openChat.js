import OpenChat from '../models/openChat';
import * as valid from '../utils/validation';

/**
 * 오픈 채팅 목록보기
 * GET /api/openchat
 */
export const getOpenChat = (req, res, next) => {
  OpenChat.getOpenChat()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
};

/**
 * 오픈 채팅 만들기
 * POST /api/openchat
 * body: { title: 'room title' }
 * Error: 
 *  1: Title empty
 */
export const addOpenChat = (req, res, next) => {
  const result = valid.validateTitleInBody(req.body);
  if (!result.valid) {
    return res.status(400).send({
      msg: 'Cannot title empty',
      code: 1
    });
  }

  req.body.title = req.body.title.trim();

  if (req.body.title.length === 0) {
    return res.status(400).send({
      msg: 'Cannot title empty',
      code: 1
    });
  }

  OpenChat.addOpenChat(req.body.title)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
};

/**
 * 오픈 채팅 삭제
 * DELETE /api/openchat
 * Error:
 *  1: Invalid Request
 */
export const deleteOpenChat = (req, res, next) => {
  const result = valid.validateObjectId(req.body._id);
  if (!result) {
    return res.status(400).send({
      msg: 'Invalid Request',
      code: 1
    });
  }

  OpenChat.deleteOpenChat(req.body._id)
    .then(result => {
      res.send({ msg: 'SUCCESS' });
    })
    .catch(err => {
      next(err);
    });
};