import { Router } from 'express';

const router: Router = Router();

router.use('/user', require('./user/index'));

module.exports = router;
