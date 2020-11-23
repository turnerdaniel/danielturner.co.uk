import { NextApiResponse, NextApiRequest } from 'next'

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json({response: "Hello World"});
}
