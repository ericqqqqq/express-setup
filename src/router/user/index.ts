import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/get', async (req: Request, res: Response) => {
  res.status(200).send({
    users: ['ericquan'],
  });
});

module.exports = router;
