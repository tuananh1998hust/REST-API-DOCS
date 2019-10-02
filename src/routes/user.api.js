import express from 'express';
import * as UserApiController from '../controllers/user.api';

const router = express.Router();

router.get('/', UserApiController.getAllUser);

router.get('/:id', UserApiController.getUserById);

router.post('/', UserApiController.createUser);

router.patch('/:id', UserApiController.createUser);

router.delete('/:id', UserApiController.deleteUserById);

export default router;
