import { VercelRequest, VercelResponse } from "@vercel/node";
import { getDateBasedOnTimezone } from "./_utils";

const months = [];

export default (req: VercelRequest, res: VercelResponse) => {
  const date = getDateBasedOnTimezone(req.query.timeZone as string);

  const month = date.toLocaleString('default', {month: 'long'});

  return res.status(200).json(month);
};