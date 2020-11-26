import { NextApiRequest, NextApiResponse } from 'next'

const sample = {
  name: "hello",
  project: "world"
};

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(sample)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
