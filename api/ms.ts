import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  const date = new Date();
  const milliseconds = date.getMilliseconds();

  return res.status(200).json(milliseconds);
};