import { VercelRequest, VercelResponse } from "@vercel/node";
import { getDateBasedOnTimezone } from "./_utils";

export default (req: VercelRequest, res: VercelResponse) => {
  const date = getDateBasedOnTimezone(req.query.timeZone as string);

  const month = date.getMonth();

  return res.status(200).json(month);
};